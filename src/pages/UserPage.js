import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPage = () => {
  const [getUser, setUser] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetch("https://dummyjson.com/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div className="single-card">
      <img src={getUser.image} alt="" />
      <h4>Username: {getUser.username}</h4>
      <p>Gender: {getUser.gender}</p>
      <p>Age: {getUser.age}</p>
    </div>
  );
};

export default UserPage;
