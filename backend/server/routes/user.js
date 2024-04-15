const express = require("express");
const router = express.Router();

const {login,signup,logout,sendOTP,verifyOTP} = require("../Controllers/Auth");

const Auth = require('../middleware/Auth');
const userp = require("../Controllers/userp");


router.post("/signup", sendOTP);
router.post('/user-account', signup);
router.post('/verify-otp', verifyOTP);
router.post("/login", login);


//testing protected routes for single middleware
router.get("/test",Auth.auth, (req,res) =>{
    res.json({
        success:true,
        message:'Welcome to the Protected route for TESTS',
    });
});



// GET route for user logout
router.get('/logout',logout);


// Route to get user profile
router.get("/user/:userId", userp.getUserProfile);


// Route to edit user profile
router.put("/user/:userId", userp.editUserProfile);


// Route to get all users data with some field
router.get("/users", userp.getAllUsers);


// Route to get a single user by ID
router.get("/user/:userId", userp.getUserById);


module.exports = router;

