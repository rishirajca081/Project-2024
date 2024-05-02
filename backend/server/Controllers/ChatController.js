

const ChatModel=require("../models/ChatModel");
const { options } = require("../routes/user");
const User=require("../models/User");

const createChat = async (req, res) => {
    try {
        const { senderId, receiverId } = req.body;

        
        // const existingChat = await ChatModel.findOne({ members: { $in: [receiverId ,senderId] } });

        //    console.log("rihdfghdghdhg",existingChat);
        // if (existingChat) {
            
        //    return res.status(200).json(existingChat);
        // }

        
        const newChat = new ChatModel({
            members: [senderId, receiverId]
        });

        const result = await newChat.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
};


//getting all the users........................................
const allusers = async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { FirstName: { $regex: req.query.search, $options: "i" } }, // Include options here
                { email: { $regex: req.query.search, $options: "i" } }, // Include options here
            ],
        }
        : {};
        //if we want to dont see login -- give the condition for the current login 
    const users = await User.find(keyword);
    res.status(200).json(users);
    console.log(users);
};

 const userChats=async(req,res)=>{
    try{
        const chat=await ChatModel.find({
            members:{$in:[req.params.userId]}
        })
        res.status(200).json(chat);
    }catch(error){
        res.status(500).json(error);
    }
};

 const findChat=async(req,res)=>{
    try {
        const chat=await ChatModel.findOne({
            members:{$all:[req.params.firstId,req.params.secondId]}
        })
        res.status(200).json(chat);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports={createChat,findChat,userChats,allusers};