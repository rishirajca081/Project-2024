const express = require("express");
const router = express.Router();

const {login, signup,logout, sendOTP, verifyOTP} = require("../Controllers/Auth");
const userp = require("../Controllers/userp");


router.post("/login", login);
router.post("/signup", sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/user-account', signup)
// GET route for user logout
router.get('/logout',logout);



// Route to get user profile
router.get("/user/:userId", userp.getUserProfile);
//router.get("/", )

// Route to edit user profile
router.put("/user/:userId", userp.editUserProfile);


// Route to get all users data with some field
router.get("/users", userp.getAllUsers);


// Route to get a single user by ID
router.get("/user/:userId", userp.getUserById);


module.exports = router;

