const mongoose = require('mongoose');


const GroupModle=mongoose.Schema({
    GroupName:{
        type:String,
    },
    members:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"User"
    },
},{timestamps:true}
)

const Group=mongoose.model("group",GroupModle);

module.exports=Group;