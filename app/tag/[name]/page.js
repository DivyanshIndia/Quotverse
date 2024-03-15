"use client";
import React, { useEffect, useState } from "react";
import back from "../../../assets/Keyboard backspace.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
import Post from "@/components/Post";
import { useRouter } from "next/navigation";

const page = () => {
  const [data, setData] = useState(null);
  const { name } = useParams();
  const router = useRouter();
  useEffect(() => {
    const fetchQuotesByTag = async () => {
      const res = await fetch(
        `https://api.quotable.io/quotes/random?limit=10?tags=${name}`
      );
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };
    fetchQuotesByTag();
  }, [name]);

  return (
    <div className="border-l-2 border-r-2 border-gray-500 border-b-2">
      <div className="flex items-center p-3 gap-3">
        <div onClick={() => router.push("/")} className="cursor-pointer">
          <Image src={back} alt="back" width={20} height={20} />
        </div>
        <div className="flex flex-col items-start">
          <p className=" text-xs text-gray-500">TOPIC</p>
          <p>#{name}</p>
        </div>
      </div>
      <div>
        {data?.map((quote) => (
          <div key={quote._id} className=" border-gray-500 border-b-2">
            <Post
              key={quote._id}
              id={quote.id}
              author={quote.author}
              quote={quote.content}
              tags={quote.tags}
            />
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default page;
