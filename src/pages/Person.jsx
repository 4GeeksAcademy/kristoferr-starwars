import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

export const Person = () => {

    const params = useParams(); // Get URL Variables {personID: 1}
    const [personBio, setPersonBio] = useState({});

    function getPerson(){
        //fetch person data from API and display on person page
        const url = `https://www.swapi.tech/api/people/${params.personID}`;
        
        fetch(url)
        .then((response)=>response.json())
        .then((body)=>{
            // console.log(body);
            // console.log(body.result.properties);
            // console.log(body.result.properties.name);
            //const PersonDetails = body.result.properties;
            setPersonBio(body.result.properties);
        });
    }

    useEffect(()=>{
        getPerson();
    },[]);

    return (
        <div className="container">
            {/* Person ID: {params.personID}
            UseState Person: {personBio.name} */}
            <div className="row p-5">
                <div className="person-image col-6">
                    <img src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${params.personID}.jpg?raw=true`} />
                </div>
                <div className="person-bio col-6">
                    <h2>{personBio.name}</h2>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                    <p>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. It is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added</p>
                </div>
            </div>
            <div className="row border-top border-danger border-3 mt-3">
                <div className="person-faqs d-flex justify-content-center">
                    <div className="name p-3 m-3 fs-4 text-danger">Name: {personBio.name} </div>
                    <div className="birth p-3 m-3 fs-4 text-danger">Birth: {personBio.birth_year}</div>
                    <div className="gender p-3 m-3 fs-4 text-danger">Gender: {personBio.gender}</div>
                    <div className="height p-3 m-3 fs-4 text-danger">Height: {personBio.height}</div>
                    <div className="skin p-3 m-3 fs-4 text-danger">Skin: {personBio.skin_color}</div>
                    <div className="eyes p-3 m-3 fs-4 text-danger">Eyes: {personBio.eye_color}</div>
                </div>
            </div>
        </div>
    );
};