import React from 'react';
import {Link} from "react-router-dom";

const IndexPage = () => {
    return (
        <div className="d-flex-col-j-c">
            <Link to="/users">Users</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/products">Products</Link>
        </div>
    );
};

export default IndexPage;
