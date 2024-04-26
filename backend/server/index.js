const express = require("express");
//const bodyParser = require('body-parser');
// app.use(bodyParser.json());
const app = express();
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 4000;

//   cookie-parser - to parse cookie sent via body 
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// middleware to parse json request body (express.json is middleware here)
app.use(express.json());
app.use(cors());
require("./database").connect();

// .... Route import and mount ...
const user = require("./routes/user");
app.use("/api/v1", user);


//Chat routers

const ChatRoute = require('./routes/ChatRoute');
const MessageRoute=require('./routes/MessageRoute');

app.use("/Chat",ChatRoute);
app.use("/message",MessageRoute);



// activate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})