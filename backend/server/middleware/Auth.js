// middleware/authenticate.js
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
require('dotenv').config();


exports.auth = (req,res, next) => {
    try{
        //extract JWT token
        //PENDING : all ways to fetch token

        console.log("cookie" , req.cookies.token);
        console.log("body" , req.body.token);
        console.log("header", req.header("Authorization"));
       
        //use req.body.token
        const token = req.cookies.token || req.body.token || req.header("Authorization").replace("Bearer ", "");
        
        if(!token || token === undefined) {
            return res.status(401).json({
                success:false,
                message:'Token Missing',
            });
        }

        //verify the token
        try{
            const payload = jwt.verify(token, process.env.JWT_SECRET);
            console.log(payload);
            //why this ?
            req.user = payload; 

        } catch(error) {
            return res.status(401).json({
                success:false,
                message:'token is invalid',
            });
        }
        next();
    } 
    catch(error) {
        return res.status(401).json({
            success:false,
            message:'Something went wrong, while verifying the token',
            error:error.message,
        });
    }
   
}