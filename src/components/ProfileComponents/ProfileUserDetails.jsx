import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10">
      <div className="flex items-center ">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src="https://cdn.pixabay.com/photo/2023/04/03/18/37/nature-7897683__340.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Username</p>
            <button className="bg-sky-500 rounded-md px-2 my-1 text-white">
              Edit Profile
            </button>
            <span>
              <TbCircleDashed />
            </span>
          </div>
          <div className="flex space-x-10 mt-2">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">5</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold ">Full Name</p>
            <span className="font-semibold ">Bio</span> <br />
            <p className="font-thin text-sm">
              💻 Web Developer | 🔟 🎉 July 🎂 | Photoholic 📷 | Music 🎧
              Lover🎵
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
