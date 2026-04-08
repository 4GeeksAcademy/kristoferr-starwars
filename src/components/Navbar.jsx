import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {

	const {store, dispatch} = useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						<img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Star_wars2.svg" />
					</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								Favorites {store.favorites.length}
							</button>
							<ul className="dropdown-menu">
								{store.favorites.map((favorite)=>{
									return (<li class="dropdown-item">{favorite.name}</li>);
								})}
							</ul>
						</div>
					</Link>
				</div>
			</div>
		</nav>
	);
};