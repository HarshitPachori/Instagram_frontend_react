import React from "react";
import SuggestionCard from "./SuggestionCard";

const HomeRight = () => {
  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div>
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.pixabay.com/photo/2023/05/30/10/18/wedding-8028163__340.jpg"
                alt=""
              />
            </div>
            <div className="ml-3">
              <p>Full name</p>
              <p className="opacity-70">Username</p>
            </div>
          </div>
          <div>
            <p className="text-blue-700 font-semibold">switch</p>
          </div>
        </div>
        <div className="space-y-5 mt-10">
          {[1, 1, 1, 1].map((item, i) => (
            <div key={i}>
              <SuggestionCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeRight;
