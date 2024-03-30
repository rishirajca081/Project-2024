const express = require("express");
//const bodyParser = require('body-parser');
// app.use(bodyParser.json());
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//   cookie-parser - what is this and why we need this ?

// middleware to parse json request body(express.json is middleware here)
app.use(express.json());
app.use(cors());
require("./database").connect();

// .... Route import and mount ...
const user = require("./routes/user");
app.use("/api/v1", user);

// activate
app.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})