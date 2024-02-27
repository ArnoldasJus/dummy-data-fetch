import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => {
  return (
    <div className="d-flex-j-a m20 pb10 toolbar">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/posts">Posts</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Toolbar;
