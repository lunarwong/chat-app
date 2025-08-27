import React, { useState } from "react";
import ChatContainer from "../components/ChatContainer";
import SideBar from "../components/SideBar";
import RightSideBar from "../components/RightSideBar";

const Homepage = () => {

    const [selectedUser, setSelectedUser] = useState(false)

  return (
    <div className=" w-full h-screen sm:px-[15%] sm:py-[5%]">
        <div className={`border-2 border-amber-50 rounded-4xl 
            h-[100%]
            backdrop-blur-xl
            overflow-hidden 
            grid grid-cols-1 relative
            ${selectedUser ? 
              'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]' :
              'md:grid-cols-2' }`}
        > 
            <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
            <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
        </div>
      
    </div>
  )
} 
export default Homepage;