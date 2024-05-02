import React, { useState, useEffect, useRef } from 'react'
import './Chat.css'
import LogoSearch from '../../Component/LogoSearch/LogoSearch';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import Conversation from '../../Component/Conversation/Conversation';

import ChatBox from '../../Component/ChatBox/ChatBox';
import { io } from 'socket.io-client';
import Chat_Navbar from '../../Component/Shared/Chat_Navbar';
import { FaUser } from 'react-icons/fa';
import ConversationGroup from '../../Component/Conversation/ConversationGroup';
import GroupChatBox from '../../Component/ChatBox/GroupChatBox';

import {BASE_URL} from '../../constant'
// >>>>>>> 565fce3e292450974238d3d5a8e6b4dd4aad2c29
const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const socket = useRef();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const { userid } = useParams();
  console.log("abcc", userid);

  const [isGroupChatOpen, setIsGroupChatOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);


  const [userData,setUserData]= useState([]);
  const [groupData,setgroupData]= useState([]);
  const [groupname,setgroupName]= useState("");

  useEffect(()=>{
      axios.get(`https://connect-hub-r42b.onrender.com/api/v1//user/${userid}`).then((res)=>{
          console.log("response ",res.data);
          setUserData(res.data);
          setgroupName(`students_${res.data.batchYear}`)
      }).catch((err)=>{
        console.log("error in dahboard",err.message);
      })
  },[userid])

    useEffect(()=>{
      axios.post(`https://connect-hub-r42b.onrender.com/Chat/groupdata`,{groupname}).then((res)=>{
        console.log("response ",res.data);
        setgroupData(res.data);
    }).catch((err)=>{
      console.log("error in dahboard",err.message);
    })
    },[groupname])


  //sending msg to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage])

  useEffect(() => {
    socket.current = io('https://chat-server-v40p.onrender.com/');
    socket.current.emit("new-user-add", userid);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
      // console.log(onlineUsers);
    });
  }, [userid])

console.log("asdasfddfd",groupData?.GroupName)

  //recieve msg from socket server

  useEffect(() => {
    socket.current.on("receiver-message", (data) => {
      setRecieveMessage(data);
    })
  }, []);

  //fetching the members on behave of login user
  useEffect(() => {
    const getChats = async () =>
      axios.get(`https://connect-hub-r42b.onrender.com/chat/${userid}`)
        .then((res) => {
          console.log("response ", res.data);
          setChats(res.data);
        })
        .catch((err) => {
          console.log("error in dashboard", err.message);
        })
    getChats()
  }, [userid])

  //Checking the online status
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== userid);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  }

  const startGroupChat = (grpname)=>{
    socket.current.emit("adduserToGroupchat", {grpname});
  }

// for opening the group chat

  const handleGroupClick = (group) => {
    setSelectedGroup(group);
    setIsGroupChatOpen(true);
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Chat_Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[22%,auto] gap-4">
          {/* Left Side */}
          <div className="flex flex-col bg-gray-200 rounded-xl">
            <div className="Chat-container bg-cardColor rounded-xl p-4 overflow-y-auto min-h-[80vh] sm:min-h-full">
              <h2 className="mb-2 px-2 py-1 bg-white rounded-xl h-8 font-bold">ALL MEMBERS</h2>
              <div className="Chat-list flex flex-col gap-4 bg-white rounded-xl mt-4 font-bold">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setCurrentChat(chat)}
                    className="conversation p-2 rounded-md hover:bg-gray-300 cursor-pointer relative"
                  >
                    <Conversation data={chat} currentUserId={userid} online={checkOnlineStatus(chat)} />
                    {checkOnlineStatus(chat) && <div className="online-dot"></div>}
                  </div>
                ))}
                
              </div>
                
              <div className="Chat-list flex flex-col gap-4 bg-white rounded-xl mt-4 font-bold">
                  <div
                    key={groupData?._id}

                    ////////////////////////////////////////////////////
                    // onClick={()=>{
                    //   startGroupChat(groupData?.GroupName)
                    // }}
                    onClick={() => handleGroupClick(groupData)}

                    className="conversation p-2 rounded-md hover:bg-gray-300 cursor-pointer relative"
                  >
                    {/* <h4 >{groupData?.GroupName} </h4> */}
                    
                    <ConversationGroup  groupdata={groupData}   />
                  </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-4 mt-8 bg-white rounded-xl">
            <div style={{ width: "20rem", alignSelf: "flex-end" }}>
              {/* <NavIcons /> */}
            </div>
            <ChatBox
              chat={currentChat}
              currentUser={userid}
              setSendMessage={setSendMessage}
              recieveMessage={recieveMessage}
            />

            {/* Temp code */}
            {isGroupChatOpen && (
              <GroupChatBox
                group={selectedGroup}
                curruser={userData}
                closeGroupChat={() => setIsGroupChatOpen(false)}
              />
            )}
           
          
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat