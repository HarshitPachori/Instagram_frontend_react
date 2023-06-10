import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
        className="h-9 w-9 rounded-full"
          src="https://cdn.pixabay.com/photo/2023/05/29/18/07/grasses-8026782__340.jpg"
          alt=""
        />
        <div className="ml-2">
            <p className="text-sm font-semibold">Username</p>
            <p className="text-sm font-semibold opacity-70">Follows you</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
