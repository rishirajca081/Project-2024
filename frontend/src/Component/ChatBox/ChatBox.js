import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import "./Chat.css";
import {format} from "timeago.js";
import InputEmoji from "react-input-emoji";
// import { addMessage } from '../../../../backend/server/Controllers/MessageController';
const ChatBox = ({chat,currentUser,setSendMessage,recieveMessage}) => {
    const [userData,setUserData]=useState(null);
    const [messages,setMessages]=useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scroll=useRef();

    
    
    //fetching data for header

    useEffect(()=>{
        const userId = chat?.members?.find(id => id !== currentUser);

    const getUserData=async()=>axios.get(`http://localhost:4000/api/v1/user/${userId}`).then((res)=>{
        setUserData(res.data);
        console.log("user data",res.data);
     }).catch((err)=>{
       console.log("error in dahboard",err.message);
     })
     if(chat!==null){
        getUserData();
     }
    },[chat,currentUser]);
    

    //fetching data for msg

    useEffect(() => {
        if (chat && chat._id) { // Add null check for chat and chat._id
            console.log("chat : ", chat._id);

            // NOT WORKING PROPERLY SEE IT LATERLY  

            const fetchMessage = async () => {
                axios.get(`http://localhost:4000/message/${chat._id}`).then((res) => {

                    setMessages(res.data);
                    console.log("data",res.data);
                }).catch((error) => {
                    console.log(error);
                });
            };
            fetchMessage();
        }
    }, [chat]);

    const handleChange=(newMessage)=>{
        setNewMessage(newMessage);
    }


    const handleSendOnEnter = async (e) => {
        // e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        };
        
       

        // Send msg to backend endpoint
        try {
            const response = await axios.post('http://localhost:4000/message', message);
            const newMessageData = response.data; // Assuming the backend returns the saved message
            setMessages([...messages, newMessageData]);
            setNewMessage("");
        } catch (error) {
            console.error("Error saving message:", error);
        }

        //send msg to socket server
        const receiverId=chat.members.find((id)=>id!==currentUser);
        setSendMessage({...message,receiverId});

    };
    const handleSendOnBtnClick = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id,
        };
        
       

        // Send msg to backend endpoint
        try {
            const response = await axios.post('http://localhost:4000/message', message);
            const newMessageData = response.data; // Assuming the backend returns the saved message
            setMessages([...messages, newMessageData]);
            setNewMessage("");
        } catch (error) {
            console.error("Error saving message:", error);
        }

        //send msg to socket server
        const receiverId=chat.members.find((id)=>id!==currentUser);
        setSendMessage({...message,receiverId});

    };

    useEffect(()=>{
        if(recieveMessage!==null && recieveMessage.chatId === chat._id){
            setMessages([...messages,recieveMessage]);
        }
     },[recieveMessage])

    //  scroll to the last msg
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior:"smooth"})
    },[messages]);

  return (
    <>
    <div className="chatBox-container">
        {chat?(<>
        <div className="chat-header">
            
            <div className="follower">

            {/* Above heading Name  */}

            <div className='name' style={{fontSize:"1.8rem"}}>
                <span>{userData?.FirstName} {userData?.Lastname}</span>
            </div>
            </div>
            </div>   
            <hr style={{ width: "85%", border: "0.1px solid #ececec" }} /> 

            {/* ChatBox Messages */}
            <div className="chat-body">
                {messages.map((message)=>{
                    return(
                        <>
                        <div ref={scroll} 
                        className={
                            message.senderId===currentUser ? "message own" : "message"
                        }>
                            <span>{message.text}</span>
                            <span>{format(message.createdAt)}</span>
                        </div>
                    </>
                    )
                })}
            </div>

            {/* CHAT SENDER */}
            {/* <div className='chat-sender'> */}
            <form onSubmit={handleSendOnEnter}>

            <InputEmoji
              value={newMessage}
              onChange={handleChange}
              cleanOnEnter
              placeholder="Type a message"
              onEnter={handleSendOnEnter}
              />
              
              
              {/* submit button code  */}


            <button type="submit" className="send-button button" onClick={handleSendOnBtnClick}>Send</button>
              </form>
            {/* </div> */}
        </>

    
    
):(
        <span className="chatbox-empty-message">Tap on a Chat to Start Conversation...</span>
    )}
        
        </div>
    </>
  )
}

export default ChatBox
