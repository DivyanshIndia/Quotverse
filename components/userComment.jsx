import Image from "next/image";
import React from "react";
import PlaceHolder from "../assets/placeholderProfile.png";
import { useState } from "react";
const UserComment = ({ author, comment }) => {
  const [liked, setLiked] = useState(false);
  const toggleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="flex items-center">
      {" "}
      {/* Use flex container with items-center to vertically center contents */}
      <div style={{ minWidth: "40px", minHeight: "40px" }}>
        <Image
          src={PlaceHolder}
          width={40}
          height={40}
          alt="profile"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <p className="text-sm ms-5 my-1 text-gray-500">{author}</p>
        <p className="text-sm ms-5 my-1">{comment}</p>
      </div>
      <div className="ml-auto">
        <div onClick={toggleLike}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={liked ? "#ff0000" : "none"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.305 19.7817C12.5702 20.4677 11.4298 20.4677 10.695 19.7817V19.7817C6.06 15.4507 3 12.5926 3 9.09537C3 6.23733 5.1735 4 7.95 4C9.516 4 11.019 4.75041 12 5.93161C12.981 4.75041 14.484 4 16.05 4C18.8265 4 21 6.23733 21 9.09537C21 12.5926 17.94 15.4507 13.305 19.7817V19.7817Z"
              stroke={liked ? "#ff0000" : "#fff"}
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
