// controllers/Auth.js
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { options } = require("../routes/user");
require("dotenv").config();


exports.signup = async (req, res) => {
    try {
        //get data
        const { FirstName, LastName, collegeRegno, password, dob, phoneNumber, batchYear, gender } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ collegeRegno });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already Exists',
            });
        }

        //secure password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create entry for User
        await User.create({
            FirstName,
            LastName,
            collegeRegno,
            password: hashedPassword,
            dob,
            phoneNumber,
            batchYear,
            gender
        });

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully',
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered, please try again later',
        });
    }
}

//login
exports.login = async (req,res) => {
    try {

        //data fetch
        const {collegeRegno, password} = req.body;

        //validation on email and password
        if(!collegeRegno || !password) {
            return res.status(400).json({
                success:false,
                message:'PLease fill all the details carefully',
            });
        }

        //check for registered user
        let user = await User.findOne({ collegeRegno });

        //if not a registered user
        if(!user) {
            return res.status(401).json({
                success:false,
                message:'User is not registered',
            });
        }

   // Create and return JWT token
        const payload = {
            collegeRegno:user.collegeRegno,
            id:user._id,
        };

     // verify password & generate a JWT token
        if(await bcrypt.compare(password,user.password) ) {
            // password match
            let token =  jwt.sign(payload, process.env.jwt_secret,
                                {
                                    expiresIn:"2h",
                                });

            user = user.toObject();
            user.token = token;
            user.password = undefined;

            const options = {
                expires: new Date( Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true,
            }

            //create cookies
            res.cookie("babbarCookie", token, options).status(200).json({
                success:true,
                token,
                user,
                message:'User Logged in successfully',
            });
        }
        else {

            //password do not match
            return res.status(403).json({
                success:false,
                message:"Password Incorrect",
            });
        }

    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:'Login Failure',
        });

    }
}

