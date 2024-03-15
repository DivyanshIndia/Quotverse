"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Post from "@/components/Post";
import back from "../../../assets/Keyboard backspace.svg";
import Image from "next/image";
import UserComment from "@/components/userComment";
import PlaceHolder from "../../../assets/placeholderProfile.png";

const userComments = [
  {
    author: "Aman",
    comment: "Wow this is cool",
  },
  {
    author: "Umang",
    comment: "rubbish",
  },
  {
    author: "Divyansh",
    comment: "Not practical",
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(userComments);
  const { quoteId } = useParams();
  const [comment, setComment] = useState("");

  const [quote, setQuote] = useState(null);

  const handlePostComment = (e) => {
    const newComment = {
      author: "username",
      comment: comment,
    };
    setComments([...comments, newComment]);
    setComment("");
  };

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(`https://api.quotable.io/quotes/${quoteId}`);
      const data = await res.json();
      if (data) {
        setQuote(data);
      }
    };
    fetchQuote();
  }, [quoteId]);
  return (
    <div className="border-l-2 border-r-2 border-b-2 border-gray-500">
      <div className="flex gap-5 pt-3 px-3 items-center">
        <div>
          <Image src={back} alt="back" />
        </div>
        <p>Comments</p>
      </div>
      {quote && (
        <div>
          <Post author={quote.author} quote={quote.content} tags={quote.tags} />
        </div>
      )}
      <div className=" text-gray-500 px-10 ms-16 mb-2">
        <div className="flex gap-1">
          <p>12 likes</p>
          <p>•</p>
          <p>2 comments</p>
        </div>
      </div>
      <div className="py-5  border-t-2 border-gray-500 border-b-2">
        {comments.map((comment, index) => (
          <div key={index} className=" px-10 pb-3">
            <UserComment author={comment.author} comment={comment.comment} />{" "}
          </div>
        ))}
        <div className=" flex items-center border-gray-500 border-t-2 pt-3 px-10">
          <Image
            src={PlaceHolder}
            alt="profile"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="w-full h-full flex-grow">
            <input
              type="text"
              placeholder="Add your comment here..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-transparent p-3 w-full border-1 outline-none"
            />
          </div>
          <div>
            <button
              className="bg-transparent  text-sky-300 border-1 border-gray-500 ml-auto"
              onClick={handlePostComment}
            >
              POST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
