import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PersonCard = (person) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <div className="card m-4" style={{width: "18rem"}}>
            <img src={person.person.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{person.person.name}</h5>
                <div className="card-gender">Gender: {person.person.gender}</div>
                <div className="card-hair">Hair-Color: {person.person.hair}</div>
                <div className="card-eyes">Eye-Color: {person.person.eyes}</div>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};