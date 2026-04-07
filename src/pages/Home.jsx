import { PersonCard } from "../components/PersonCard.jsx";
import { VehicleCard } from "../components/VehicleCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
  const navigate = useNavigate();

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
		</div>
	);
}; 