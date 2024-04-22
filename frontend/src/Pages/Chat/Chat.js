import React, { useState,useEffect, useRef } from 'react'
import './Chat.css'
import LogoSearch from '../../Component/LogoSearch/LogoSearch';
import {useLocation,useParams} from 'react-router-dom';
import axios from 'axios';
import Conversation from '../../Component/Conversation/Conversation';
import ChatBox from '../../Component/ChatBox/ChatBox';
import {io} from 'socket.io-client';

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
      const online=onlineUsers.find((user)=>user.userid===chatMember);
      return online ? true:false;
    }

  return (
    
    <div className="Chat">
      {/* Left Side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat) => (
              <div
                onClick={()=>setCurrentChat(chat)}
              >
              
                <Conversation
                  data={chat}
                  currentUserId={userid}
                  online={checkOnlineStatus(chat)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}

      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          {/* <NavIcons /> */}
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={userid}
         setSendMessage= {setSendMessage}
         recieveMessage={recieveMessage}
          // setSendMessage={setSendMessage}
          // receivedMessage={receivedMessage}
        />
      </div>
    </div>
  )
}

export default Chat
