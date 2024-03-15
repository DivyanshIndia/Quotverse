"use client";
import Post from "@/components/Post";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchInitialQuotes } from "@/store/actions";

const Page = () => {
  const { quotes } = useSelector((state) => state.quotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialQuotes());
  }, [dispatch]);

  return (
    <div className="h-full w-full border-l-2 border-gray-500 border-r-2 border-b-2">
      <div className="flex">
        <div className="flex flex-col">
          {quotes &&
            quotes.slice(0, 4).map((post) => (
              <div key={post._id} className=" border-gray-500 border-b-2">
                <Post
                  id={post._id}
                  author={post?.author}
                  quote={post?.content}
                  tags={post?.tags}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
