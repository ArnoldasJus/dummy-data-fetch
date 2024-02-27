import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PostsPage = () => {
  const [getPosts, setPosts] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.posts);
        setPosts(data.posts);
      });
  }, []);

  function goPostPage(id) {
    nav("/posts/" + id);
  }

  return (
    <div className="d-flex-g-wr m20">
      {getPosts.map((x, i) => (
        <div
          className="post"
          id={x.id}
          key={i}
          onClick={() => goPostPage(x.id)}
        >
          <h4>{x.title}</h4>
          <p>{x.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
