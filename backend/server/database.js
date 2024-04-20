const mongoose = require("mongoose");

require("dotenv").config();


exports.connect = () => {
    mongoose.connect(process.env.URL,{
        //process.env.URL
        //"mongodb://0.0.0.0:27017/2k24"
        useNewUrlParser : true,
        useUnifiedTopology:true
    })

    .then(()=>{
        console.log("db connected sucessfully")
    })
    .catch( (err)=>{
        console.log("DB connection issues");
        console.log(err);
        process.exit(1);
    });
}