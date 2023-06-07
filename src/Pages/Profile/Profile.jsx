import React from "react";
import ProfileUserDetails from "../../components/ProfileComponents/ProfileUserDetails";
import RegUserPostPart from "../../components/ProfileComponents/RegUserPostPart";

const Profile = () => {
  return (
    <div className="px-20">
      <div>
        <ProfileUserDetails />
      </div>
      <div>
        <RegUserPostPart />
      </div>
    </div>
  );
};

export default Profile;
