import React from "react";
import StoryCircle from "../../components/Story/StoryCircle";
import HomeRight from "../../components/HomeRight/HomeRight";
import PostCard from "../../components/Post/PostCard";

const HomePage = () => {
  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-[44%] px-10">
          <div className="stroyDiv flex space-x-2 border p-4 rounded-md w-full justify-start">
            {[1, 1, 1].map((ite, i) => (
              <div key={i}>
                <StoryCircle />
              </div>
            ))}
          </div>
          <div>
            {[1, 1, 1, 1].map((item, i) => (
              <div key={i} className="space-y-10 w-full mt-5">
                <PostCard />
              </div>
            ))}
          </div>
        </div>
        <div className="w-[35%] ">
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
