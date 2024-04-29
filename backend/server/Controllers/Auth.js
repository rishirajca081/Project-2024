const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const OTP = require("../models/OTP");
const otpGenerator = require("otp-generator");
const User = require("../models/User");
const CommonUsers = require('../models/CommonUsers');
const jwt = require("jsonwebtoken");
const otpDB = require('../models/OTP');

const { options } = require("../routes/user");
require("dotenv").config();


// SendOTP
exports.sendOTP = async (req, res) =>  {
    console.log(req.body);
    try {
        //fetch email from request ki body
        const {email} = req.body;

        //check if user already exist
        const checkUserPresent = await User.findOne({email});

        ///if user already exist , then return a response
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message:'User already registered',
            })
        }


        // generate otp
        var otp = otpGenerator.generate(6, {
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        });
        console.log("OTP generated: ", otp );
        
        // check unique otp or not
        let result = await OTP.findOne({otp: otp});

        while(result) {
            otp = otpGenerator(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp: otp});
        }

        const otpPayload = {email, otp};


        // Create an entry for OTP
        // const newotp = new OTP(otpPayload);
        // await newotp.save();
        const otpBody = await OTP.create(otpPayload);
        console.log(otpBody);


        // return response successful
        res.status(200).json({
            success:true,
            message:'OTP Sent Successfully',
            otp,
        })
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"in catch of backend",
        })

    }


};

 // Verify  Otp
exports.verifyOTP = async (req, res) =>  {

    try {
        //fetch email from request ki body
        const {email,otp} = req.body;
        console.log(otp);
        //check if user already exist
        const checkUserPresent = await User.findOne({email});

        ///if user already exist , then return a response
        if(checkUserPresent) {
            return res.status(401).json({
                success:false,
                message:'User already registered',
            })
        }

        const getStoredOTP = await otpDB.findOne({email});
        console.log(getStoredOTP);
        if(otp === getStoredOTP.otp){
            return res.status(200).json({
                success: true,
                message: "OTP has been verified successfully"
            });
        }
    }
    catch(error) {
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Invalid OTP",
        })
    }
};

// Signup
exports.signup = async (req, res) => {
    try {
        //get data
        const { FirstName, LastName, collegeRegno, password, dob, phoneNumber, batchYear, company, gender, email} = req.body;


    //     const { path } = req.file; // Assuming the user's profile picture is uploaded as a file

    //   // Upload profile picture to Cloudinary
    // const result = await cloudinary.uploader.upload(path, { folder: 'profile_pictures' });


        // check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User already Exists',
                data: existingUser
            });
        }
        
        //secure password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create entry for User
        const user = await User.create({
            FirstName,
            LastName,
            collegeRegno,
            password: hashedPassword,
            dob,
            phoneNumber,
            batchYear,
            company,
            gender,
            email
        });

        
        // Dynamically create collection for the batch year if not present
        const collectionName = `students_${batchYear}`;
        const collections = await mongoose.connection.db.collections();
        const collectionExists = collections.some(collection => collection.collectionName === collectionName);
        if (!collectionExists) {
            await mongoose.connection.db.createCollection(collectionName);
        }

        // Insert the user into the appropriate collection
        await mongoose.connection.db.collection(collectionName).insertOne(user.toObject());
        const commonUser = await CommonUsers.create({
            email,
            batchYear
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
};




//login
exports.login = async (req, res) => {
    try {
        //data fetch
        const { email, password } = req.body;

        //validation on email and password
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please fill all the details carefully',
            });
        }

        //check for registered user
        let user = await User.findOne({ email });


        //if not a registered user
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'User is not registered',
            });
        }

        // Verify password
        if (await bcrypt.compare(password, user.password)) {
            // Password match

            // Check the batch year and get the appropriate collection name
            let collectionName = "";
            const existinguser = await CommonUsers.findOne({ email });
            if (existinguser) {
                collectionName = `students_${existinguser.batchYear}`;
            }

            // Find the user in the appropriate collection
            user = await mongoose.connection.collection(collectionName).findOne({ email });


            // If user not found in the specified collection, return error
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User not found in the specified batch year',
                });
            }

            // Create and return JWT token
            const payload = {
                email: user.email,
                id: user._id,
            };

            const token = jwt.sign(payload, process.env.jwt_secret, {
                expiresIn: '2h',
            });

            // Remove password from the user object
            delete user.password;

            // Set cookie options
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            // Save user data token in cookies
            res.cookie('babbarCookie', token, options).status(200).json({
                success: true,
                token,
                user,
                message: 'User Logged in successfully',
            });
        } else {
            // Password does not match
            return res.status(403).json({
                success: false,
                message: 'Password Incorrect',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Login Failure',
        });
    }
};




// logout
exports.logout = async (req, res) => {
    try {
        // Clear the cookie containing the JWT token
        res.clearCookie("babbarCookie");

        return res.status(200).json({
            success: true,
            message: 'User Logged out successfully',
        });
    } catch(error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Logout Failure',
        });
    }
}
