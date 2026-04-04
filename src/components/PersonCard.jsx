import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const PersonCard = (person) => {

    const {store, dispatch} =useGlobalReducer()

    return(
        <div className="card m-4" style={{width: "18rem"}}>
            <img src="https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/1.jpg?raw=true" className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{person.person.name}</h5>
                {console.log(person)}
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </div>
    );
};