import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./RegUserPostCard.css";

const RegUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">
        <img
          className="cursor-pointer"
          src="https://cdn.pixabay.com/photo/2023/05/30/06/16/vegetable-pan-8027678__340.jpg"
          alt=""
        />
        {/* when we hover to show heart and comment by below div */}
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <span className="text-2xl">
                <AiFillHeart />
              </span>
              <span>16</span>
            </div>
            <div>
              <span className="text-2xl">
                <FaComment />
              </span>
              <span>14</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegUserPostCard;
