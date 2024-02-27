import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const [getPost, setPost] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/posts/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  return (
    <div className="single-post m20">
      <h4>{getPost.title}</h4>
      <p>{getPost.body}</p>
    </div>
  );
};

export default PostPage;
