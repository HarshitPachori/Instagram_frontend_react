import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";

const CommentModal = ({ onClose, isOpen }) => {
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://cdn.pixabay.com/photo/2023/05/23/11/47/australian-wood-ducks-8012590__340.jpg"
                  alt=""
                />
              </div>
              <div className="w-[55%] pl-10">
                <div className="flex items-center justify-between py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
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
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModal;
