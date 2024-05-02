import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
// import "./Chat.css";
import {format} from "timeago.js";
import InputEmoji from "react-input-emoji";
import { FaUser } from 'react-icons/fa';
// import { addMessage } from '../../../../backend/server/Controllers/MessageController';
const ChatBox = ({chat,currentUser,setSendMessage,recieveMessage}) => {
    const [userData,setUserData]=useState(null);
    const [messages,setMessages]=useState([]);
    const [newMessage, setNewMessage] = useState("");
    const scroll=useRef();

    
    
    //fetching data for header

    useEffect(()=>{
        const userId = chat?.members?.find(id => id !== currentUser);

    const getUserData=async()=>axios.get(`https://connect-hub-r42b.onrender.com/api/v1/user/${userId}`).then((res)=>{
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
    console.log("chat..",chat);
    console.log("chat type...",typeof chat);
    useEffect(() => {
        if(chat) { // Add null check for chat and chat._id
            if(chat._id){
            console.log("chat : ", chat._id);
            
            // NOT WORKING PROPERLY SEE IT LATERLY  

            if(chat===null){
                window.location.reload();
            }
            const fetchMessage = async () => {
                axios.get(`https://connect-hub-r42b.onrender.com/message/${chat._id}`).then((res) => {

                    setMessages(res.data);
                    console.log("data",res.data);
                }).catch((error) => {
                    console.log(error);
                });
            };
            fetchMessage();
        }
        }
        else{
                
                // window.location.reload()
              
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
            const response = await axios.post('https://connect-hub-r42b.onrender.com/message', message);
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
            const response = await axios.post('https://connect-hub-r42b.onrender.com/message', message);
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
    <div className="grid grid-rows-[14vh,60vh,13vh] bg-cardColor rounded-xl relative  h-screen">
        {chat ? (
            <>
                <div className="flex flex-col p-4 h-[600px]">
                    <div className="flex justify-between bg-gray-200 rounded-xl h-12">
                        <div className="flex items-center">
                            <FaUser className='text-xl ml-4' />
                            <div className="text-2xl ml-4">{userData?.FirstName} {userData?.Lastname}</div>
                        </div>
                    </div>
                    {/* <hr className="w-85 border-[0.1px] border-gray-300" /> */}
                    <div className="flex flex-col gap-2 p-6 overflow-y-auto">
                        {messages.map((message) => {
                            return (
                                <div
                                    ref={scroll}
                                    className={
                                        message.senderId === currentUser ? "bg-gradient-to-b from-blue-400 to-cyan-500  rounded-bl-lg rounded-tr-lg text-white p-4 max-w-[28rem] self-end" : "bg-black text-white p-4 rounded-bl-lg rounded-tr-lg max-w-[28rem] self-start"
                                    }
                                >
                                    <span>{message.text}</span>
                                    <span className="text-sm text-gray-600 self-end">{format(message.createdAt)}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full  p-4">
                    <form onSubmit={handleSendOnEnter} className="flex items-center justify-between">
                        <InputEmoji
                            value={newMessage}
                            onChange={handleChange}
                            cleanOnEnter
                            placeholder="Type a message"
                            onEnter={handleSendOnEnter}
                            className="flex-1"
                        />
                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg ml-2" onClick={handleSendOnBtnClick}>Send</button>
                    </form>
                </div>
            </>
        ) : (
            <span className="text-center text-gray-500">Tap on a Chat to Start Conversation...</span>
        )}
    </div>
</>

    )
}
export default ChatBox    