import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";

const UserPage = () => {

    const [getUser, setUser] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        fetch("https://dummyjson.com/users/" + id)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })

    }, [])

    return (
                <div className="card">
                    <img src={getUser.image} alt=""/>
                    <h4>{getUser.username}</h4>
                    <p>{getUser.gender}</p>
                    <p>{getUser.age}</p>
                </div>
    );
};

export default UserPage;
