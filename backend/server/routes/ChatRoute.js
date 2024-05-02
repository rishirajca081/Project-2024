const express = require('express');
const { createChat, userChats, findChat ,allusers} = require('../Controllers/ChatController');
const getMembersingroup=require("../Controllers/getMembersingroup");
const router = express.Router();

router.post("/", createChat);

router.get("/",allusers);

router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChat);
router.post("/groupdata",getMembersingroup);



module.exports = router;
