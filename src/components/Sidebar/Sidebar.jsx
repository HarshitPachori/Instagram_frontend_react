import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [ActiveTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "profile") {
      navigate("/username");
    } else if (title === "home") {
      navigate("/");
    }
  };
  return (
    <div className="sticky top-0 h-[100vh]">
      <div className="flex flex-col h-full justify-between px-10">
        <div>
          <div className="pt-10">
            <img
              className="w-40"
              src="https://i.imgur.com//zqpwkLQ.png"
              alt="logo"
            />
          </div>
          <div className="mt-10">
            {menu.map((menuItem, i) => (
              <div
                key={i}
                onClick={() => handleTabClick(menuItem.title)}
                className="flex items-center mb-5 cursor-pointer text-lg"
              >
                <span className="text-2xl mr-5">
                  {ActiveTab === menuItem.title
                    ? menuItem.activeIcon
                    : menuItem.icon}
                </span>
                <p
                  className={` ${
                    ActiveTab === menuItem.title
                      ? "font-bold capitalize"
                      : "font-semibold capitalize"
                  }`}
                >
                  {menuItem.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <span className="text-2xl mr-5">
            {" "}
            <IoReorderThreeOutline />
          </span>
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
