import React, { useState,useEffect, useRef } from 'react'
import './Chat.css'
import LogoSearch from '../../Component/LogoSearch/LogoSearch';
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import Conversation from '../../Component/Conversation/Conversation';
import ChatBox from '../../Component/ChatBox/ChatBox';
import {io} from 'socket.io-client';
import Chat_Navbar from '../../Component/Shared/Chat_Navbar';
import { FaUser } from 'react-icons/fa';

const Chat = () => {

    const [chats,setChats]=useState([]);
    const [currentChat,setCurrentChat]=useState(null);
    
    const socket=useRef();

    const [onlineUsers,setOnlineUsers]=useState([]);  
   const [sendMessage,setSendMessage]=useState(null);
   const [recieveMessage,setRecieveMessage]=useState(null);
    const {userid} = useParams();

        console.log("abcc",userid);
       
        //sending msg to socket server
        useEffect(()=>{
          if(sendMessage!==null){
            socket.current.emit('send-message',sendMessage);
          }
        },[sendMessage])


        

      useEffect(()=>{
        socket.current=io('http://localhost:8800');
        socket.current.emit("new-user-add",userid);
        socket.current.on("get-users",(users)=>{
          setOnlineUsers(users);

          // console.log(onlineUsers);
        });
      },[userid])


      //recieve msg from socket server

      useEffect(()=>{
        socket.current.on("receiver-message",(data)=>{
          setRecieveMessage(data);
        })
      },[]);

        //fetching the members on behave of login user



      useEffect(()=>{
        const getChats=async()=>axios.get(`http://localhost:4000/chat/${userid}`).then((res)=>{
            console.log("response ",res.data);
            setChats(res.data);
        }).catch((err)=>{
          console.log("error in dahboard",err.message);
        })
       getChats()
    },[userid])

    //Checking the online status

    const checkOnlineStatus=(chat)=>{
      const chatMember=chat.members.find((member)=>member!==userid);
      const online=onlineUsers.find((user)=>user.userId===chatMember);
      return online ? true:false;
    }

    return (
      <div className="grid  sm:grid-[22%,auto] gap-4 bg-gray-100" >
            {/* Navbar */}
            <Chat_Navbar />
      <div className="Chat grid grid-cols-1 sm:grid-cols-[22%,auto] gap-4 ">
        {/* Left Side */}
       
        <div className="Left-side-chat flex flex-col  bg-gray-200 rounded-xl">
          {/* <LogoSearch /> */}
        
          <div className="Chat-container bg-cardColor  rounded-xl p-4 overflow-y-auto min-h-[80vh] sm:min-h-full">
            <h2 className="mb-2 px-2 py-1 bg-white rounded-xl h-8 font-bold">ALL MEMBERS</h2>
            
            
            <div className="Chat-list flex flex-col gap-4 bg-white rounded-xl mt-4 font-bold">
              {chats.map((chat) => (
                <div key={chat.id} onClick={() => setCurrentChat(chat)} className="conversation p-2 rounded-md hover:bg-gray-300 cursor-pointer relative">
                  <Conversation data={chat} currentUserId={userid} online={checkOnlineStatus(chat)} />
                  {checkOnlineStatus(chat) && <div className="online-dot"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Right Side */}
        <div className="Right-side-chat flex flex-col gap-4 mt-8 bg-white rounded-xl">
          <div style={{ width: "20rem", alignSelf: "flex-end" }}>
            {/* <NavIcons /> */}
          </div>
          <ChatBox chat={currentChat} currentUser={userid} setSendMessage={setSendMessage} recieveMessage={recieveMessage} />
        </div>
      </div>
      </div>
  );
  
}

export default Chat

