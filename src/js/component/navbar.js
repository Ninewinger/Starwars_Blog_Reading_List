import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiStarfighter } from "@react-icons/all-files/gi/GiStarfighter";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	let lista = [];

	/* 	function removeFav(i) {
		var array = [...store.favorite];
		array.splice(i, 1);
		setStore({ favorite: array });
	} */

	console.log("esta es la lista", lista);
	useEffect(
		() => {
			lista.push(store.favorite);
		},
		[store.favorite]
	);

	return (
		<nav className="navbar navbar-light text-light bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-light bg-dark">
					<GiStarfighter />
				</span>
			</Link>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark">
				<button
					className="navbar-toggler text-light bg-dark"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav text-light bg-dark">
						<li className="nav-item active text-light bg-dark">
							<Link className="nav-link text-light bg-dark" to="/characters">
								Characters <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-light bg-dark" to="/vehicles">
								Vehicles
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link text-light bg-dark" to="/planets">
								Planets
							</Link>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle text-white"
								href="#"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Favorites
							</a>
							<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>

								<li>
									<a className="dropdown-item" to="#">
										{!!lista && lista[0].name}
										{/* <button onClick={() => removeFav(uid)}>X</button> */}
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
		</nav>
	);
};
