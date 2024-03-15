import React from "react";
import Image from "next/image";
import PlaceHolder from "../assets/placeholderProfile.png";
import { useSelector } from "react-redux";

const Profile = () => {
  const { liked } = useSelector((state) => state.liked);
  const { user } = useSelector((state) => state.user);
  return (
    <div className="p-10 text-white  md:mx-auto">
      <div>
        <Image
          src={PlaceHolder}
          width={100}
          height={100}
          alt="profile"
          className="rounded-full"
        />
        <p className="text-xl font-bold mt-10 mb-3">{user.name}</p>
        <p className=""> {user.id} </p>
        <p className="mt-5 text-sm">{user.description}</p>
        <p className="text-gray-500 mt-8">
          {liked.length}
          <span className="ps-1 ">likes</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
