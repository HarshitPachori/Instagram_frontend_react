import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import "./CreatePostModal.css";

const CreatePostModal = ({ onClose, isOpen }) => {
  const [IsDragOver, setIsDragOver] = useState(false);
  const [File, setFile] = useState();

  const handleDragOver = (event) => {
    event.preventDefault(); // referesh na ho isliye
    event.dataTransfer.dropEffect = "copy";
    setIsDragOver(true);
  };
  const handleDragLeave = (event) => {
    setIsDragOver(false);
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.file(0);
    if (
      droppedFile.type.startsWith("image/") ||
      droppedFile.type.startsWith("video/")
    ) {
      setFile(droppedFile);
    }
  };
  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (
      (file && file.type.startsWith("image/")) ||
      file.type.startsWith("video/")
    ) {
      setFile(file);
    } else {
      setFile(null);
      alert("Please select an image or video");
    }
  };
  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={true} isCentered>
        <ModalOverlay />
        <ModalContent>
          <div className="flex items-center justify-between py-1 px-10">
            <p>Create New Post</p>
            <Button
              className=""
              variant={"ghost"}
              size={"sm"}
              colorScheme="blue"
            >
              Share
            </Button>
          </div>
          <hr />
          <ModalBody>
            <div className="h-[70vh] justify-between">
              <div>
                {/* agar file nahi hai to ye div dikhewga */}
                {!File && (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className="drag-drop h-full"
                  >
                    <div>
                      <span className="text-3xl">
                        <FaPhotoVideo />
                      </span>
                      <p>Drag Photos or videos here</p>
                    </div>
                    <label htmlFor="file-upload" className="customFileUpload">
                      Select From Computer
                    </label>
                    {/*  */}
                    <input
                      type="file"
                      id="file-upload"
                      accept="image/* ,video/*"
                      onChange={handleOnChange}
                    />
                  </div>
                )}
                {/* agara file hai to image dikhegi */}
                {File && <img src={URL.createObjectURL(File)} alt="" />}
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CreatePostModal;
