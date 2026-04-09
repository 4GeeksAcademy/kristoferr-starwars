import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const PersonCard = (person) => {

    const {store, dispatch} =useGlobalReducer()
    const navigate = useNavigate();

    return(
        <div className="card m-4" style={{minWidth: "300px"}}>
            <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${person.person.uid}.jpg?raw=true`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{person.person.properties.name}</h5>
                <div className="card-gender">Gender: {person.person.properties.gender}</div>
                <div className="card-hair">Hair-Color: {person.person.properties.hair_color}</div>
                <div className="card-eyes">Eye-Color: {person.person.properties.eye_color}</div>
                <button 
                onClick={() => navigate("/person/"+ person.person.uid)}
                className="btn btn-primary mt-3">Learn More</button>
                <button 
                onClick={(event)=> dispatch({
                    type: "add_favorite_person",
                    payload: person.person
                })}
                className="btn btn-warning justify-content-end mt-3 ms-3"><FaRegHeart /></button>
            </div>
        </div>
    );
};