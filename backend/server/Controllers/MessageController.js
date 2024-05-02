const express=require('express');
const MessageModel=require("../models/MessageModel");
const groupMessage=require("../models/GroupMessageModel");

const addMessage=async(req,res)=>{
    const {ChatId,senderId,text}=req.body;
    const message=new MessageModel({
        ChatId,
        senderId,
        text
    })

    try {
        const result=await message.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

//GRoup add message

const addGroupMessage=async(req,res)=>{
    try {
        const {chatId,senderId,text,senderName}=req.body;
        const message=new groupMessage({
            chatId,
            senderId,
            text,
            senderName,
        })
        const result=await message.save();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


//getting the group message from the db api
const getGroupMessage=async(req,res)=>{
    const {chatId}=req.params;
    try {
        const result=await groupMessage.find({chatId:chatId});
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}


const getMessage=async(req,res)=>{
    const {chatId}=req.params;
    try {
        const result=await MessageModel.find({ ChatId: chatId })
        
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports={addMessage,getMessage,addGroupMessage,getGroupMessage};