
// perfect code is here


// const io = require("socket.io")(8800, {
//     cors: {
//         origin: "http://localhost:3000"
//     }
// });

// let activeUsers = [];

// io.on("connection", (socket) => {

//     // Add new User
//     socket.on('new-user-add', (newUserId) => {
//         // Check if user is not added previously
//         if (!activeUsers.some((user) => user.userId === newUserId)) {
//             activeUsers.push({
//                 userId: newUserId,
//                 socketId: socket.id // Correct variable name to socketId
//             });
//         }
//         console.log("Connected Users", activeUsers);
//         io.emit('get-users', activeUsers);
//     });

//     // Send Message
//     socket.on("send-message", (data) => {
//         const { receiverId } = data;
//         const user = activeUsers.find((user) => user.userId === receiverId);
//         console.log("sending from socket to :", receiverId);
//         console.log("Data ", data);
//         if (user) {
//             io.to(user.socketId).emit("receiver-message", data); // Correct variable name to socketId
//         }
//     });
    
//         socket.on('adduserToGroupchat',(data)=>{
//                 const {grpname} = data;
//                 socket.join(grpname);
//                 console.log("user joined to room ",grpname)
//         })
//     // Disconnect
//     socket.on("disconnect", () => {
//         activeUsers = activeUsers.filter((user) => user.socketId !== socket.id); // Correct variable name to socketId
//         console.log("User Disconnected", activeUsers);
//         io.emit('get-users', activeUsers);
//     });
// });



// Demo here

const io = require("socket.io")(8800, {
    cors: {
        origin: "http://localhost:3000"
    }
});

let activeUsers = [];
let groups = {}; // Object to store group data

io.on("connection", (socket) => {

    // Add new User
    socket.on('new-user-add', (newUserId) => {
        if (!activeUsers.some((user) => user.userId === newUserId)) {
            activeUsers.push({
                userId: newUserId,
                socketId: socket.id
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
            socket.to(user.socketId).emit("receiver-message", data);
        }
    });

    // Add user to Group chat
    socket.on('adduserToGroupchat', (data) => {
        const { group } = data;
       socket.join(group.GroupName);
        if (!groups[group]) {
            groups[group] = [];
        }
        groups[group].push(socket.id);
        console.log("user joined to room ", group);
    });

    // Send message to Group
    socket.on('send-message-to-group', (data) => {
        console.log("data",data)
        const { grpname, text, senderId,sendername } = data; // Added senderId
        console.log(`Message to group ${grpname}: ${text}`);
        socket.to(grpname).emit('group-message',{text:text,senderId:senderId,senderName:sendername}); // Changed 'socket' to 'io'
    });

    // Leave Group chat
    socket.on('leave-group', (grpname) => {
        socket.leave(grpname);
        if (groups[grpname]) {
            groups[grpname] = groups[grpname].filter(id => id !== socket.id);
            console.log(`User left the group ${grpname}`);
        }
    });

    // Disconnect
    socket.on("disconnect", () => {
        activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
        // Remove user from all groups they might be in
        Object.keys(groups).forEach(group => {
            groups[group] = groups[group].filter(id => id !== socket.id);
        });
        console.log("User Disconnected", activeUsers);
        io.emit('get-users', activeUsers);
    });
});






  
