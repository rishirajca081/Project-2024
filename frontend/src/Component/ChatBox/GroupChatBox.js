// import React, { useState, useEffect } from 'react';
// import { io } from 'socket.io-client';
// import axios from 'axios';

// const GroupChatBox = ({ group, closeGroupChat ,curruser}) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
// let newSocket;
//   useEffect(() => {
//      newSocket = io('http://localhost:8800');
//     setSocket(newSocket);
//     // return () => newSocket.disconnect();
// }, []);

// useEffect(()=>{
//     newSocket.emit("adduserToGroupchat", { group });
//     newSocket.on('group-message', (data) => {
//         setMessages(prevMessages => [...prevMessages, data]);
//         console.log("hello122222222222",data)
//       });
//       return()=>{
//         newSocket.off("group-message")
//       }
//   },[])

//   console.log("curruser ",curruser)

//   const handleSendMessage = (e) => {
//     if (message.trim() && socket) {
//       socket.emit('send-message-to-group', {
//         senderId: curruser._id, // Assuming group.userId is available
//         text: message,
//         sendername:curruser.FirstName,
//         chatId: group._id, // Assuming group._id is correct
//         receiverId: group.members, // Send the message to the group (all members)
//         grpname: group.GroupName // Send the message to the group (all members)
//       });
//       setMessages(prevMessages => [...prevMessages, { sendername: curruser.FirstName, text: message }]);
//       setMessage('');
//     }

//     axios.post('http://localhost:4000/message/group',{
//         chatId:group._id,
//         senderId:curruser._id,
//         text:message,
//     })
//     .then(response => {
//       console.log('Message saved successfully:', response.data);
//       // Update the local state with the new message
//       setMessages(prevMessages => [...prevMessages, { senderName: curruser.FirstName, text: message }]);
//       setMessage('');
//     })
//     .catch(error => {
//       console.error('Error saving message:', error);
//     });


//   };

//   return (
//     <div className="bg-white rounded-xl p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">{group.GroupName}</h2>
//         <button className="text-red-500" onClick={closeGroupChat}>Close</button>
//       </div>
//       <div className="overflow-y-auto h-80">
//         {messages.map((msg, index) => (
//           <div key={index} className="mb-2">
//             <span className="font-semibold">{msg.sendername}:</span> {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="flex mt-4">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GroupChatBox;

import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

// const GroupChatBox = ({ group, closeGroupChat, curruser }) => {
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [socket, setSocket] = useState(null);
// let newSocket;
//   useEffect(() => {
//      newSocket = io('http://localhost:8800');
//     setSocket(newSocket);

//     newSocket.emit("adduserToGroupchat", { group });

   

//     return () => {
//         newSocket.disconnect();
//     };
// }, [group]);

// useEffect(()=>{
//     newSocket.on('group-message', (data) => {
//         //   setMessages(prevMessages => [...prevMessages, data]);
//         setMessages(data);
//     });
//     return()=>{
//             newSocket.off('group-message')

//         }
//   },[])

//   useEffect(() => {
//     fetchGroupMessages();
//   }, [group]);

//   const fetchGroupMessages = () => {
//     axios.get(`http://localhost:4000/message/group/${group._id}`)
//       .then(response => {
//         setMessages(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching group messages:', error);
//       });
//   };

//   const handleSendMessage = () => {
//     if (message.trim() && socket) {
//       socket.emit('send-message-to-group', {
//         senderId: curruser._id,
//         text: message,
//         sendername: curruser.FirstName,
//         chatId: group._id,
//         receiverId: group.members,
//         grpname: group.GroupName
//       });
//       setMessage('');
//     //   setMessages(prevMessages => [...prevMessages, { sendername: curruser.FirstName, text: message }]);
//       console.log("asasssss>> ",messages)
//       setMessage('');
//     }   
            

//     axios.post('http://localhost:4000/message/group', {
//       chatId: group._id,
//       senderId: curruser._id,
//       text: message,
//       //yeh aad kiya 
//       senderName:curruser.FirstName,
//     })
//       .then(response => {
//         console.log('Message saved successfully:', response.data);
//         setMessages(prevMessages => [...prevMessages, { senderName: curruser.FirstName, text: message }]);
//         setMessage('');
//       })
//       .catch(error => {
//         console.error('Error saving message:', error);
//       });
//   };

//   return (
//     <div className="bg-white rounded-xl p-4">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-semibold">{group.GroupName}</h2>
//         <button className="text-red-500" onClick={closeGroupChat}>Close</button>
//       </div>
//       <div className="overflow-y-auto h-80">
//         {messages.map((msg, index) => (
//           <div key={index} className="mb-2">
//             <span className="font-semibold">{msg.senderName}:</span> {msg.text}
//           </div>
//         ))}
//       </div>
//       <div className="flex mt-4">
//         <input
//           type="text"
//           placeholder="Type a message..."
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:border-blue-500"
//         />
//         <button
//           onClick={handleSendMessage}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default GroupChatBox;


const GroupChatBox = ({ group, closeGroupChat, curruser }) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [socket, setSocket] = useState(null);
  
    useEffect(() => {
      const newSocket = io('http://localhost:8800');
      setSocket(newSocket);
  
      newSocket.emit("adduserToGroupchat", { group });
  
      newSocket.on('group-message', (data) => {
        // Append the new message to the existing messages array
        console.log("data >> ",data)
        setMessages(prevMessages => [...prevMessages, data]);
      });
  
      return () => {
        newSocket.disconnect();
      };
    }, [group]);
  console.log(messages)
    useEffect(() => {
      fetchGroupMessages();
    }, [group]);
  
    const fetchGroupMessages = () => {
      axios.get(`http://localhost:4000/message/group/${group._id}`)
        .then(response => {
          // Ensure the response data is an array before setting it as messages
          if (Array.isArray(response.data)) {
            setMessages(response.data);
          }
        })
        .catch(error => {
          console.error('Error fetching group messages:', error);
        });
        console.log("messages......",messages);
    };
  
    const handleSendMessage = () => {
      if (message.trim() && socket) {
        socket.emit('send-message-to-group', {
          senderId: curruser._id,
          text: message,
          sendername: curruser.FirstName,
          chatId: group._id,
          receiverId: group.members,
          grpname: group.GroupName
        });
        setMessage('');
      }   

      console.log("user name or not",curruser.FirstName);
      axios.post('http://localhost:4000/message/group', {
        chatId: group._id,
        senderId: curruser._id,
        text: message,
        senderName: curruser.FirstName,
      })
        .then(response => {
          console.log('Message saved successfully:', response.data);
          // Update messages with the new message
          setMessages(prevMessages => [...prevMessages, { senderName: curruser.FirstName, text: message }]);
          setMessage('');
        })
        .catch(error => {
          console.error('Error saving message:', error);
        });
    };
  
    return (
      <div className="bg-white rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">{group.GroupName}</h2>
          <button className="text-red-500" onClick={closeGroupChat}>Close</button>
        </div>
        <div className="overflow-y-auto h-80">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span className="font-semibold">{msg.senderName}:</span> {msg.text}
            </div>
          ))}
        </div>
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 w-full mr-2 focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Send
          </button>
        </div>
      </div>
    );
  };
  
  export default GroupChatBox;
  