const mongoose = require('mongoose');

const message= new mongoose.Schema({
    ChatId:{
        type:String
    },
    senderId:{
        type:String
    },
    text:{
        type:String
    }
},
  {
    timestamps:true
  }
);
const MessageModel=mongoose.model("Message",message);

module.exports=MessageModel;