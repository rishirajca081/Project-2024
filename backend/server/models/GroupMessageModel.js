
const mongoose=require("mongoose");
const GroupMessageModel=new mongoose.Schema({
    chatId:{
        type:String,
    },
    senderId:{
        type:String,
    },
    text:{
        type:String,
    },
    senderName:{
        type:String,
    }
},
{
    timestamps:true,
})
const groupMessage=mongoose.model("groupmessage",GroupMessageModel);
module.exports=groupMessage;