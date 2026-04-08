import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const PlanetCard = (planet) => {

    const {store, dispatch} =useGlobalReducer()
    const navigate = useNavigate();

    return(
        <div className="card m-4" style={{minWidth: "300px"}}>
            <img src={planet.planet.image} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{planet.planet.name}</h5>
                <div className="card-gender">Climate: {planet.planet.climate}</div>
                <div className="card-hair">Terrain: {planet.planet.terrain}</div>
                <div className="card-eyes">Population: {planet.planet.population}</div>
                <button 
                onClick={() => navigate("/planet/"+ planet.planet.uid)}
                className="btn btn-primary mt-3">Learn More</button>
                <button 
                onClick={(event)=> dispatch({
                    type: "add_favorite_planet",
                    payload: planet.planet
                })}
                className="btn btn-warning justify-content-end mt-3 ms-3"><FaRegHeart /></button>
            </div>
        </div>
    );
};