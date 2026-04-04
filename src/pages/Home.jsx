import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { PersonCard } from "../components/PersonCard.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="container">
			<div className="row">
				<h1>Characters</h1>
				<div className="characters d-flex">
					{store.persons.map((person)=>{
						return <PersonCard person={person} key={person.uid}/>;
					})}
				</div>
			</div>
		</div>
	);
}; 