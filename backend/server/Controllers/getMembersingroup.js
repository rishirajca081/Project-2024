
const GroupModel=require("../models/GroupModel");
const getMembersingroup=async(req,res)=>{
    try {
        const {groupname}=req.body;
        console.log(groupname)
        const groupinfo=await GroupModel.findOne({
            GroupName:groupname,
        })
        res.status(200).json(groupinfo);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports=getMembersingroup;