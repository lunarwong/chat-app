import React from "react";

const RightSideBar = ({selectedUser}) => {

  const imageSampleData=[
    "./src/assets/mediaSample/haseeb-jamil-J9lD6FS6_cs-unsplash.jpg",
    "./src/assets/mediaSample/paul-arky-mM7bI3hqSO8-unsplash.jpg",
    "./src/assets/mediaSample/stephen-momot-UivGzIDhVyw-unsplash.jpg",
    "./src/assets/mediaSample/thomas-de-fretes-QRsDpGPV7qk-unsplash.jpg",
  ]

  return selectedUser && (
    <div className={`bg-[#8185B2]/10  w-full relative overflow-y-scroll
    ${selectedUser ? "max-md:hidden":""}`}>

        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img src={selectedUser?.profilePic || "./src/assets/icons/catAvatarIcon.PNG"}
          className="w-20 aspect-[1/1] rounded-full"/>
          <h1 className="px-10 text-sm font-medium mx-auto flex items-center gap-2 ">
            <p className="w-2 h-2 rounded-full bg-green-500"></p>
            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto text-center ">{selectedUser.bio}</p>
        </div>

        <hr  className="border-[#ffffff50] my-4"/>

        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {imageSampleData.map((url,  index)=> (
              <div key={index} onClick={()=> window.open(url)}
                className="cursor-pointer rounded"
              >
                <img src={url} className="w-full h-full object-cover rounded-md"/>
              </div>
            ))}
          </div>
        </div>

        

    </div>
  )
} 
export default RightSideBar;