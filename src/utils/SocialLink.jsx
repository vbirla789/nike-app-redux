import React from "react";

const SocialLink = ({ icon }) => {
  return (
    <div className=" ">
      <img
        src={icon}
        alt="connect-link-icons"
        className="w-8 h-8 flex items-center absolute  right-0 "
      />
    </div>
  );
};

export default SocialLink;
