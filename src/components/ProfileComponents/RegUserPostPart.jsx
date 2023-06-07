import React, { useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";

const RegUserPostPart = () => {
  const tabs = [
    { tab: "Post", icon: <AiOutlineTable />, activeIcon: "" },
    { tab: "Reels", icon: <RiVideoAddLine />, activeIcon: "" },
    { tab: "Saved", icon: <BiBookmark />, activeIcon: "" },
    { tab: "Tagged", icon: <AiOutlineUser />, activeIcon: "" },
  ];

  const [ActiveTab, setActiveTab] = useState();

  return (
    <div>
      <div className="flex items-center space-x-14 border-t relative">
        {tabs.map((tagName) => (
          <div
            onClick={() => setActiveTab(tagName.tab)}
            className={`${
              ActiveTab === tagName.tab ? "border-t border-black" : "opacity-60"
            } flex items-center cursor-pointer py-2 `}
          >
            <p>{tagName.icon}</p>
            <p className="ml-1">{tagName.tab}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RegUserPostPart;
