import React from "react";

const StoryCircle = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center">
      <img
        className="h-20 w-20 rounded-full object-cover"
        src="https://cdn.pixabay.com/photo/2023/05/24/05/06/dog-8014047_640.jpg"
        alt=""
      />
      <p>Username</p>
    </div>
  );
};

export default StoryCircle;
