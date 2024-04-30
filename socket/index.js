// const { Socket } = require("socket.io");

// const io=require("socket.io")(8800,{
//     cors:{
//         origin:"http://localhost:3000"
//     }
// })

// let activeUsers=[];

// io.on("connection",(Socket)=>{
    
//     //add new User

//     Socket.on('new-user-add',(newUserId)=>{

//         //if user is not added previously

//         if(!activeUsers.some((user)=> user.userId===newUserId)){
//             activeUsers.push({
//                 userId:newUserId,
//                 SocketId:Socket.id
//             })
//         }
//         console.log("Connected Users",activeUsers);
//         io.emit('get-users',activeUsers);
//     })

//     //sendMessage
//     Socket.on("send-message",(data)=>{
//         const {receiverId}=data;
//         const user=activeUsers.find((user)=>user.userId===receiverId);
//          console.log("sending from socket to :",receiverId);
//          console.log("Data ",data);
//          if(user){
//             io.to(user.SocketId).emit("receiver-message",data);
//          }
//     })

//     Socket.on("disconnect",()=>{
//         activeUsers=activeUsers.filter((user)=>user.SocketId!==Socket.Id);
//         console.log("User Disconnected",activeUsers);
//         io.emit('get-users',activeUsers);
//     })
// })



const io = require("socket.io")(8800, {
    cors: {
        // origin: "http://localhost:3000"
        origin: "https://project-2024-chi.vercel.app"
    }
});

let activeUsers = [];

io.on("connection", (socket) => {

    // Add new User
    socket.on('new-user-add', (newUserId) => {
        // Check if user is not added previously
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id // Correct variable name to socketId
            });
        }
        console.log("Connected Users", activeUsers);
        io.emit('get-users', activeUsers);
    });

    // Send Message
    socket.on("send-message", (data) => {
        const { receiverId } = data;
        const user = activeUsers.find((user) => user.userId === receiverId);
        console.log("sending from socket to :", receiverId);
        console.log("Data ", data);
        if (user) {
            io.to(user.socketId).emit("receiver-message", data); // Correct variable name to socketId
        }
    });

    // Disconnect
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id); // Correct variable name to socketId
        console.log("User Disconnected", activeUsers);
        io.emit('get-users', activeUsers);
    });
});
