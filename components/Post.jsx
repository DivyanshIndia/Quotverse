import React, { use, useState } from "react";
import Image from "next/image";
import PlaceHolder from "../assets/placeholderProfile.png";
import comment from "../assets/comment.svg";
import share from "../assets/send.svg";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addLiked, removeLiked } from "../store/LikedSlice";

const Post = ({ author, quote, tags, id, like }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(like ? true : false);

  const toggleLike = () => {
    if (liked) {
      handleRemoveLiked(id);
    } else if (!liked) {
      handleAddLiked({ author, quote, tags, id });
    }
    setLiked(!liked);
  };

  const handleAddLiked = (item) => {
    dispatch(addLiked(item));
  };

  const handleRemoveLiked = (itemId) => {
    dispatch(removeLiked(itemId));
  };
  return (
    <div className="p-10 pb-2 text-white  border-gray-500 ">
      <div className="flex">
        <div style={{ minWidth: "50px", minHeight: "50px" }}>
          <Image
            src={PlaceHolder}
            width={50}
            height={50}
            alt="profile"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-base ms-5 my-1">{author}</p>
          <p className="text-base ms-5 my-1">{quote}</p>
          <div className="flex gap-3 ms-4 mt-3">
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
            <Link href={`/comment/${id}`}>
              <Image src={comment} alt="comment" />
            </Link>
            <Image src={share} alt="share" />
          </div>
          <div className="flex gap-1 ms-4 text-gray-500 mt-5">
            {tags &&
              tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index !== tags.length - 1 && <span className="mx-1">•</span>}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
