import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Conversation = ({ data, currentUserId ,online}) => {
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Ensure data and data.members are defined before accessing them
        if (data && data.members) {
            const userId = data.members.find(id => id !== currentUserId);
            console.log(userId);
            
                // You can fetch user data here using axios or any other method
    
                    const getUserData=async()=>axios.get(`https://connect-hub-r42b.onrender.com/api/v1/user/${userId}`).then((res)=>{
                       setUserData(res.data);
                       console.log("user data",res.data);
                    }).catch((err)=>{
                      console.log("error in dahboard",err.message);
                    })
                
                    getUserData();
            };
           
        
       
    }, []); // Make sure to include data and currentUserId in the dependency array

    return (
        // yeh chat mai side baar ka design handle krna h
        <>
        <div className="follower conversation">
        <div>
            {/* Render your conversation component here */}
            <div className='name' style={{fontSize:"1.2rem"}}>
                <span>{userData?.FirstName} {userData?.Lastname}</span>
                <br/>
                <span style={{fontSize:"0.8rem"}}>{online ? "Online" : "Offline"}</span>
            </div>
        </div>
        </div>
        <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
        </>
    );
};

export default Conversation;
