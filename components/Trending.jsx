"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import settings from "../assets/settings.svg";
import Link from "next/link";

const Trending = ({setTrendingOpen}) => {
  const [tags, setTags] = useState(null);
  useEffect(() => {
    const fetchTags = async () => {
      const res = await fetch("https://api.quotable.io/tags");
      const data = await res.json();
      if (data) {
        setTags(data);
      }
    };
    fetchTags();
  }, []);

  return (
    <div className="p-10 text-white w-max">
      <div className="flex items-center gap-10">
        <p className="text-xl font-bold text-nowrap">Trending Topics</p>
        <Image
          src={settings}
          width={20}
          height={20}
          alt="settings"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col gap-3 mt-8">
        <p className="text-sky-500">show all quotes</p>
        {tags &&
          tags.map((tag) => {
            if (tag.quoteCount > 40) {
              return (
                <div key={tag._id} className="text-sm">
                  <p className="text-gray-500 ">{tag.name.toUpperCase()}</p>
                  <Link href={`/tag/${tag.slug}`} onClick={()=>setTrendingOpen(false)}>
                    {" "}
                    <p>#{tag.slug}</p>{" "}
                  </Link>

                  <p className="text-gray-500">{tag.quoteCount} quotes</p>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
};

export default Trending;
