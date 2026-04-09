import { PersonCard } from "../components/PersonCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";
import { PlanetCard } from "../components/PlanetCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {

  	const {store, dispatch} =useGlobalReducer()
  	const navigate = useNavigate();

	async function getAllPersons(){
		
		//Fetch general list of people
		const url = "https://www.swapi.tech/api/people?page=1&limit=10";
		const response = await fetch(url);
		const body = await response.json();
		const personData = body.results;
		console.log("i have loaded persons", personData);

		//Get general list of Keys for People
		const peopleKeys = [];
		for(let key in personData){
			//console.log(personData[key].uid); //1,2,3,4,5...
			peopleKeys.push(personData[key].uid);
		}

		//Fetch all detailed data from each person and add to object
		const peopleFetch = [];
		for(let key in peopleKeys){
			const detailedUrl = `https://www.swapi.tech/api/people/${peopleKeys[key]}`;
			const response = await fetch(detailedUrl);
			const body = await response.json();
			peopleFetch.push(body.result);
			console.log(peopleFetch);
		}

		const action = {
			type: "add_person",
			payload: personData
		};
		dispatch(action);
	}

	async function getAllVehicles(){
		
		const url = "https://www.swapi.tech/api/vehicles?page=1&limit=10";
		const response = await fetch(url);
		const body = await response.json();
		const vehicleData = body.results;
		//console.log("i have loaded persons", personData);
		const action = {
			type: "add_vehicle",
			payload: vehicleData
		};
		dispatch(action);
	}

	async function getAllPlanets(){
		
		const url = "https://www.swapi.tech/api/planets?page=1&limit=10";
		const response = await fetch(url);
		const body = await response.json();
		const planetData = body.results;
		//console.log("i have loaded persons", personData);
		const action = {
			type: "add_planet",
			payload: planetData
		};
		dispatch(action);
	}

	useEffect(()=>{
		getAllPersons();
		getAllVehicles();
		getAllPlanets();
	},[]);

// 	useEffect(() => {
// 		async function loadData() {
// 			await getAllPersons();
// 			await getAllVehicles();
// 			await getAllPlanets();
// 		}

// 		loadData();
// }, []);

	return (
		<div className="container">
			<div className="row d-flex overflow-auto gap-3 m-5">
				<h1>Characters</h1>
				<div className="characters d-flex">
					{store.persons.map((person)=>{
						return <PersonCard person={person} key={person.uid}/>;
					})}
				</div>
			</div>

			<div className="row d-flex overflow-auto gap-3 m-5">
				<h1>Vehicles</h1>
				<div className="characters d-flex">
					{store.vehicles.map((vehicle)=>{
						return <VehicleCard vehicle={vehicle} key={vehicle.uid}/>;
					})}
				</div>
			</div>

			<div className="row d-flex overflow-auto gap-3 m-5">
				<h1>Planets</h1>
				<div className="characters d-flex">
					{store.planets.map((planet)=>{
						return <PlanetCard planet={planet} key={planet.uid}/>;
					})}
				</div>
			</div>
		</div>
	);
}; 