const express=require("express");
const {addMessage,getMessage,addGroupMessage,getGroupMessage}=require("../Controllers/MessageController");

const router=express.Router();

router.post("/",addMessage);
router.get("/:chatId",getMessage);
//group message route
router.post("/group",addGroupMessage);
router.get("/group/:chatId",getGroupMessage);
module.exports=router;