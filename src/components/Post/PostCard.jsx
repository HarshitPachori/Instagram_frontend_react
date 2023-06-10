import React, { useState } from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import "../Post/PostCard.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import CommentModal from "../Comment/CommentModal";
import { useDisclosure } from "@chakra-ui/react";

const PostCard = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const [isPostLiked, setisPostLiked] = useState(false);
  const [isPostBookmark, setisPostBookmark] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClick = () => {
    setshowDropDown(!showDropDown);
  };
  const handlePostLiked = () => {
    setisPostLiked(!isPostLiked);
  };
  const handlePostBookmarked = () => {
    setisPostBookmark(!isPostBookmark);
  };
  const handleOpenCommentModal = () => {
    onOpen();
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex items-center justify-between w-full p-4 px-5">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/05/21/12/40/dog-8008483_640.jpg"
              alt=""
            />
            <div className="pl-2">
              <p className="font-semibold text-sm">Username</p>
              <p className="font-thin text-sm">Location</p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots onClick={handleClick} className="dots text-xl" />
            <div className="dropdown-content">
              {showDropDown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img
            className="object-cover w-full"
            src="https://cdn.pixabay.com/photo/2023/04/13/07/48/multi-storey-car-park-7921955_640.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full  py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <span>
                <AiFillHeart
                  onClick={handlePostLiked}
                  className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                />
              </span>
            ) : (
              <span>
                <AiOutlineHeart
                  className="text-2xl hover:opacity-50 cursor-pointer"
                  onClick={handlePostLiked}
                />
              </span>
            )}
            <span className="text-xl hover:opacity-50 cursor-pointer">
              <FaRegComment onClick={handleOpenCommentModal} />
            </span>
            <span className="text-2xl hover:opacity-50 cursor-pointer">
              <RiSendPlaneLine />
            </span>
          </div>
          <div className="cursor-pointer">
            {isPostBookmark ? (
              <span className="text-xl hover:opacity-50 cursor-pointer">
                <BsBookmarkFill onClick={handlePostBookmarked} />
              </span>
            ) : (
              <span className="text-xl hover:opacity-50 cursor-pointer">
                <BsBookmark onClick={handlePostBookmarked} />
              </span>
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          <p>10 likes</p>
          <p className="opacity-50 py-2 cursor-pointer">view all 10 comments</p>
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5 gap-2">
            <span>
              <BsEmojiSmile />
            </span>
            <input
              type="text"
              name=""
              id=""
              placeholder="Add a comment..."
              className="commentInput"
            />
          </div>
        </div>
        <CommentModal
          isPostLiked={isPostLiked}
          isPostBookmark={isPostBookmark}
          handlePostLiked={handlePostLiked}
          handlePostBookmarked={handlePostBookmarked}
          onClose={onClose}
          isOpen={isOpen}
        />
      </div>
    </div>
  );
};

export default PostCard;
