import React from "react";
import {useNavigate} from 'react-router-dom'


const SideBar = ({selectedUser, setSelectedUser}) => {

  const navigate = useNavigate();

  const userData = [
    {
      "_id": "ID001",
      "email": "lauralovetuna@catmail.chat",
      "fullName": "Laura",
      "profilePic": "./src/assets/profilePic/mikhail-vasilyev-IFxjDdqK_0U-unsplash.jpg",
      "bio": "Meow meowmeow meow meow!",
    },
    {
      "_id": "ID002",
      "email": "alexanderthird@catmail.chat",
      "fullName": "Alexander The 3rd",
      "profilePic": "./src/assets/profilePic/amber-kipp-75715CVEJhI-unsplash.jpg",
      "bio": "Meow!, meowmeow meow meow.",
    },
    {
      "_id": "ID003",
      "email": "pickledomination@catmail.chat",
      "fullName": "Pickle Cucumber",
      "profilePic": "./src/assets/profilePic/raoul-droog-yMSecCHsIBc-unsplash.jpg",
      "bio": "Meow!, meowmeow meow meow!",
    },
  ]

  return (
    <div className={`bg-[#8185B2]/10 h-full p-5 rounded-r-xl overflow-y-scroll 
      text-white ${selectedUser ? "max-md:hidden" : ""}
    `}>
      <div className="pb-5">

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="./src/assets/latte-the-cat-logo.PNG" alt="logo" className="max-w-10" />
            <h2 >C(h)at</h2>
          </div>
          <div className="relative py-2 group">
            <img src="./src/assets/moon-logo-v2.PNG" alt="Menu" className="max-h-5 cursor-pointer" />
            <div className="absolute top-full right-0 z-20 w-32 p-5 rounded-md
              bg-[#282142] border border-gray-600 text-gray-100 hidden group-hover:block
            ">
              <p onClick={() => navigate('/profile')} className="cursor-pointer text-sm">Edit Profile</p>
              <hr className="my-2 border-t border-gray-500"/>
              <p className="cursor-pointer text-sm">Logout</p>
            </div>
          </div>
        </div>

        <div className="bg-[#473d59] rounded-full flex items-center gap-2 py-3 px-4 mt-5">
          <img src="" alt="Search" className="w-3" />
          <input type="text" className="bg-transparent border-none outline-none 
            text-white text-xs placeholder-[#acb6e8] flex-1" 
            placeholder="Search User" 
          />
        </div>

      </div>

      <div className="flex flex-col">
        {userData.map((user,index) => (
          <div 
            onClick={()=> {setSelectedUser(user)}}
            key={index} 
            className={`relative flex items-center gap-2 p-2 pl-4
            rounded cursor-pointer max-sm:text-sm 
            ${selectedUser?._id == user._id && 'bg-[#282142]/50'}
          `}>
            <img src={user?.profilePic || "./src/assets/latte-the-cat-logo.PNG"} alt="Avatar"
              className="w-[35px] aspect-[1/1] rounded-full"
            />
            <div className="flex flex-col leading-5">
              <p>{user.fullName}</p>
              {
                index < 3
                ? <span className="text-green-400 text-xs">Online</span>
                : <span className="text-neutral-400 text-xs">Offline</span>
              }
            </div>
            {index > 2 && <p className="absolte top-4 right-4 text-xs h-5 w-5
            flex justify-center items-center rounded-full bg-violet-500/50
            ">
            {index}</p>}
          </div>
        ))}
      </div>

    </div>
  )
} 
export default SideBar;