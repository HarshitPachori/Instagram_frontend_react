import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";
const CommentModal = ({
  onClose,
  isOpen,
  isPostLiked,
  isPostBookmark,
  handlePostLiked,
  handlePostBookmarked,
}) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay  />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full object-cover"
                  src="https://cdn.pixabay.com/photo/2023/05/30/15/42/stone-face-8028981_640.jpg"
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10 relative ">
                <div className="flex items-center justify-between  py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src="https://cdn.pixabay.com/photo/2023/06/01/06/22/british-shorthair-8032816_640.jpg"
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="ml-2">username</p>
                    </div>
                  </div>
                  <span>
                    <BsThreeDots />
                  </span>
                </div>
                <div className="comment">
                  {[1, 1, 1, 1, 1, 1].map((item, i) => (
                    <div key={i}>
                      <CommentCard />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 w-[90%]">
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
                        <FaRegComment />
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
                  <div className="w-full  py-2 ">
                    <p>10 likes</p>
                    <p className="opacity-50 text-sm">1 day ago</p>
                  </div>
                  {/* <div className="border border-t w-full"> */}
                  <div className="flex w-full items-center  gap-2 border ">
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
                  {/* </div> */}
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
