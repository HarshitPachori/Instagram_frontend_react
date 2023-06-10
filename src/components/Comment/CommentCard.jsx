import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLiked, setisCommentLiked] = useState(false);
  const handleCommentLiked = () => {
    setisCommentLiked(!isCommentLiked);
  };
 
  return (
    <div>
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center ">
          <div>
            <img
              className="w-10 h-10 rounded-full object-cover"
              src="https://cdn.pixabay.com/photo/2023/05/31/18/15/st-stephens-basilica-8031985_640.jpg"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">Username</span>
              <span className="ml-2">nice post</span>
            </p>
            <div className="flex items-center space-x-3 text-sm opacity-50 pt-2">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>
        {isCommentLiked ? (
          <AiFillHeart
            onClick={handleCommentLiked}
            className="text-sm hover:opacity-50 cursor-pointer text-red-600"
          ></AiFillHeart>
        ) : (
          <AiOutlineHeart
            onClick={handleCommentLiked}
            className="text-sm hover:opacity-50 cursor-pointer"
          ></AiOutlineHeart>
        )}
      </div>

    </div>
  );
};

export default CommentCard;
