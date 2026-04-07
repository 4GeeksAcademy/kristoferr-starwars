import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Vehicle = () => {

    const params = useParams(); // Get URL Variables {personID: 1}
    const [vehicleBio, setVehicleBio] = useState({});

    function getVehicle(){
        //fetch vehicle data from API and display on person page
        const url = `https://www.swapi.tech/api/vehicles/${params.vehicleID}`;
        
        fetch(url)
        .then((response)=>response.json())
        .then((body)=>{
            // console.log(body);
            // console.log(body.result.properties);
            // console.log(body.result.properties.name);
            //const PersonDetails = body.result.properties;
            setVehicleBio(body.result.properties);
        });
    }

    useEffect(()=>{
        getVehicle();
    },[]);

    return (
        <div className="container">
            {/* Vehicle ID: {params.vehicleID}
            UseState Vehicle: {vehicleBio.name} */}
            <div className="row p-5">
                <div className="person-image col-6">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicles/${params.vehicleID}.jpg?raw=true`} />
                </div>
                <div className="person-bio col-6">
                    <h2>{vehicleBio.name}</h2>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                </div>
            </div>
            <div className="row border-top border-danger border-3 mt-3">
                <div className="person-faqs d-flex justify-content-center">
                    <div className="name p-3 m-3 fs-4 text-danger">Name: {vehicleBio.name} </div>
                    <div className="birth p-3 m-3 fs-4 text-danger">Model: {vehicleBio.model}</div>
                    <div className="gender p-3 m-3 fs-4 text-danger">Manufacturer: {vehicleBio.manufacturer}</div>
                    <div className="height p-3 m-3 fs-4 text-danger">Passengers: {vehicleBio.passengers}</div>
                    <div className="skin p-3 m-3 fs-4 text-danger">Cargo: {vehicleBio.cargo_capacity}</div>
                    <div className="eyes p-3 m-3 fs-4 text-danger">Cost: {vehicleBio.cost_in_credits}</div>
                </div>
            </div>
        </div>
    );
};