import React, { useEffect, useRef } from "react";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = ({selectedUser, setSelectedUser}) => {

  const scrollEnd = useRef()
  useEffect(()=> {
    if(scrollEnd.current) {
      scrollEnd.current.scrollIntoView({behavior: "smooth"})
    }
  }, [])

  const messagesSample = [
    {
        "_id": "a001",
        "senderId": "ID000",
        "recieverId": "ID001",
        "text": "Hey you there ?",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "a002",
        "senderId": "ID001",
        "recieverId": "ID000",
        "text": "Hey! how r u?",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "a003",
        "senderId": "ID000",
        "recieverId": "ID001",
        "text": "Im hungry >:(",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    
    {
        "_id": "a004",
        "senderId": "ID001",
        "recieverId": "ID000",
        "image": "./src/assets/thomas-tucker-MNtag_eXMKw-unsplash.jpg",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
    {
        "_id": "a005",
        "senderId": "ID001",
        "recieverId": "ID000",
        "text": "im eating hehe",
        "seen": true,
        "createdAt": "2025-04-28T10:23:27.844Z",
    },
  ]

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg ">

      {/* header */}
      <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
        <img src={selectedUser.profilePic} alt="Profile Picture" className="w-8 rounded-full"/>
        <h3 className="flex-1 text-lg text-black flex items-center gap-3">
          {selectedUser.fullName}
          <span className="w-2 h-2 rounded-full bg-[#2cff2c]"></span>
        </h3>
        <img onClick={()=> setSelectedUser(null)} src="./src/assets/icons/backIcon.PNG" alt="Arrow" className="md:hidden max-w-7"/>
        <img  src="./src/assets/icons/searchIcon.PNG" alt="Help" className="max-md:hidden max-w-5"/>
      </div>

      {/* chat */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messagesSample.map((msg,index)=> (
          <div key={index} className={`flex items-end gap-2 justify-end 
            ${msg.senderId !== 'ID000' && 'flex-row-reverse'}`}>
            {msg.image ? (
              <img src={msg.image} alt=""
              className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8" 
              />
            ) : (
              <p className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-pink-700/50 text-white 
              ${msg.senderId === 'ID000' ? 'rounded-br-none' : 'rounded-bl-none'} `}>
                {msg.text}</p>
            )}
            <div className="text-center text-xs">
              <img src={msg.senderId === "ID000" ? "./src/assets/profilePic/madalyn-cox-pEh9Ue8ZXHU-unsplash.jpg" : selectedUser.profilePic}
              className="w-7 rounded-full"/>
              <p className="text-gray-500">{formatMessageTime(msg.createdAt)}</p>
            </div>
            
          </div>
        ))}

        <div ref={scrollEnd}></div>

      </div>

      {/* footer */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input type="text" placeholder="Send a message" 
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none
            text-white placeholder-gray-600"/>
          <input type="file" id='image' accept="image/png, image/jpeg" hidden/>
          <label htmlFor="image">
            <img src="./src/assets/icons/galleryIcon.PNG" alt="Gallery Icon" className="w-5 mr-2 cursor-pointer"/>
          </label>
        </div>
        <img src="./src/assets/icons/sendIconOutline.PNG" alt="Send Button" className="w-5 cursor-pointer"/>
      </div>

    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src="./src/assets/icons/catChatIcon.PNG" alt="logo" className="max-w-16"/>
      <p className="text-lg font-medium text-white">Chat with cats!</p>
    </div>
  )
} 
export default ChatContainer;