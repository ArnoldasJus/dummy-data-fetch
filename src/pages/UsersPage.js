import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const [getUsers, setUsers] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.users);
        setUsers(data.users);
      });
  }, []);

  function goUserPage(id) {
    nav("/users/" + id);
  }

  return (
    <div className="d-flex-g-wr m20">
      {getUsers.map((x, i) => (
        <div
          className="card"
          id={x.id}
          key={i}
          onClick={() => goUserPage(x.id)}
        >
          <img src={x.image} alt="" />
          <h4>Username: {x.username}</h4>
          <p>Gender: {x.gender}</p>
          <p>Age: {x.age}</p>
        </div>
      ))}
    </div>
  );
};

export default UsersPage;
