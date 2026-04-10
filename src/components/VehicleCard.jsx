import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const VehicleCard = (vehicle) => {

    const {store, dispatch} =useGlobalReducer()
    const navigate = useNavigate();

    return(
        <div className="card m-4" style={{minWidth: "300px"}}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${vehicle.vehicle.uid}.jpg`} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{vehicle.vehicle.name}</h5>
                <div className="card-gender">Model: {vehicle.vehicle.model}</div>
                <div className="card-hair">Manufacturer: {vehicle.vehicle.manufacturer}</div>
                <div className="card-eyes">Passengers: {vehicle.vehicle.passengers}</div>
                <button 
                onClick={() => navigate("/vehicle/"+ vehicle.vehicle.uid)}
                className="btn btn-primary mt-3">Learn More</button>
                <button 
                onClick={(event)=> dispatch({
                    type: "add_favorite_vehicle",
                    payload: vehicle.vehicle
                })}
                className="btn btn-warning justify-content-end mt-3 ms-3"><FaRegHeart /></button>
            </div>
        </div>
    );
};