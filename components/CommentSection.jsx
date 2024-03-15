import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Post from "./Post";

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const searchParams = useSearchParams();
  const quoteId = searchParams.get("quoteId");
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(`https://api.quotable.io/quotes/:${quoteId}`);
      const data = await res.json();
      if (data) {
        setData(data);
      }
    };
    fetchData();
  }, [quoteId]);
  return (
    <div>
      <div>
    <Post author={quote.author} quote={quote.content} tags={quote.tags} />
      </div>
    </div>
  );
};

export default CommentSection;
