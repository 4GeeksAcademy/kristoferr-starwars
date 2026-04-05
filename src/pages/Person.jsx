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
            <div className="row">
                <div className="person-image col-6">
                    <img src="https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/1.jpg?raw=true"/>
                </div>
                <div className="person-bio col-6">
                    <h2>Luke Skywalker</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="row border-top border-danger border-3 mt-3">
                <div className="person-faqs d-flex justify-content-center">
                    <div className="name p-3 m-3 fs-4 text-danger">Name: test </div>
                    <div className="birth p-3 m-3 fs-4 text-danger">Birth: test</div>
                    <div className="gender p-3 m-3 fs-4 text-danger">Gender: test</div>
                    <div className="height p-3 m-3 fs-4 text-danger">Height: test</div>
                    <div className="skin p-3 m-3 fs-4 text-danger">Skin: test</div>
                    <div className="eyes p-3 m-3 fs-4 text-danger">Eyes: test</div>
                </div>
            </div>
        </div>
    );
};