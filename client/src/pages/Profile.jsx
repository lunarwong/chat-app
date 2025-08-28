import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

  const [selectedImg, setSelectedImg] = useState(null)
  const navigate = useNavigate();
  const [name, setName] = useState("")
  const [bio, setBio] = useState("")

  const handleSubmit = async(e) => {
    e.preventDefault();
    navigate('/')
  }

  return (
    <div className=" w-full min-h-screen sm:px-[15%] sm:py-[5%]
      bg-[url('./src/assets/spectralBg.jpg')] bg-cover
      flex items-center justify-center
    ">
      <div className="backdrop-blur-2xl border-1 border-gray-200 rounded-lg
        flex items-center justify-between
        w-5/6 max-w-2xl
        max-sm:flex-col-reverse
      ">
        <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-5 p-10">
          <h3 className="text-2xl">Profile details</h3>
          <label htmlFor="profilePic" className="flex items-center gap-3 cursor-pointer">
            <input onChange={(e) => setSelectedImg(e.target.files[0])} 
              type="file" id="profilePic" accept=".png, .jpg, .jpeg" hidden />
            <img className="w-20 h-20 rounded-full"
              src={selectedImg ? URL.createObjectURL(selectedImg) : "./src/assets/icons/catAvatarIcon.PNG"} alt="" />
            Upload Profile Image
          </label>

          <input type="text" required placeholder="Name"
            className="p-2 border border-amber-100 rounded-md focus:outline-none
            focus:ring-2 focus:ring-pink-600
            "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <textarea type="text" rows={4} placeholder="Write bio" 
            onChange={(e) => setBio(e.target.value)} value={bio}
            className="p-2 border border-amber-100 rounded-md focus:outline-none
            focus:ring-2 focus:ring-pink-600
            "
            />

          <button type="submit" 
            className="bg-gradient-to-r from-pink-700 to-gray-900 text-white
            p-2 rounded-full text-lg cursor-pointer "
          >Save</button>


        </form>
        <img 
          className="max-w-50 aspect-square mx-10 max-sm:mt-10"
          src="./src/assets/icons/catChatIcon.PNG" alt=""/>
      </div>
    </div>
  )
} 
export default Profile;