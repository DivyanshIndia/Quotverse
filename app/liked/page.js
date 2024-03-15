"use client";
import Post from "@/components/Post";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { liked } = useSelector((state) => state.liked);

  return (
    <div className="h-full w-full border-l-2 border-gray-500 border-r-2 border-b-2">
      {liked.length > 0 ? (
        <div className="flex">
          <div className="flex flex-col ">
            {liked.map((post) => (
              <div key={post._id} className=" border-gray-500 border-b-2 ">
                <Post
                  id={post._id}
                  author={post?.author}
                  quote={post?.content || post?.quote}
                  tags={post?.tags}
                  like={true}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-2xl text-gray-500">No Liked Quotes!</p>
        </div>
      )}
    </div>
  );
};

export default Page;
