import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const PersonCard = (person) => {

    const {store, dispatch} =useGlobalReducer()
    const navigate = useNavigate();

    return(
        <div className="card m-4" style={{minWidth: "300px"}}>
            <img src={person.person.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{person.person.name}</h5>
                <div className="card-gender">Gender: {person.person.gender}</div>
                <div className="card-hair">Hair-Color: {person.person.hair}</div>
                <div className="card-eyes">Eye-Color: {person.person.eyes}</div>
                <button 
                onClick={() => navigate("/")}
                className="btn btn-primary mt-3">Learn More</button>
                <button className="btn btn-warning justify-content-end mt-3 ms-3"><FaRegHeart /></button>
            </div>
        </div>
    );
};