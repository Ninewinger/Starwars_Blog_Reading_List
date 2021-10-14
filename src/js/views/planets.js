import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(null);
	const [planet, setPlanet] = useState(null);
	console.log(planet);

	useEffect(
		() => {
			if (selected !== null) {
				buscaPlanet(selected);
				console.log(planet);
			}
		},
		[selected]
	);

	function buscaPlanet(uid) {
		for (let i = 0; i < store.planet.length; i++) {
			if (uid === store.planet[i].uid) {
				setPlanet(store.planet[i]);
			}
		}
	}

	return (
		<>
			<div className="row">
				<div className="col-md-8 offset-md-2 py-5">
					{!!selected &&
						!!planet && (
							<div className="card detail">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{planet.properties.name}</h5>
									<p className="card-text">{planet.description}</p>
									<ul>
										<li>Diameter: {planet.properties.diameter}</li>
										<li>Rotation period: {planet.properties.rotation_period}</li>
										<li>Orbital period: {planet.properties.orbital_period}</li>
										<li>Gravity: {planet.properties.gravity}</li>
										<li>Population: {planet.properties.population}</li>
										<li>Climate: {planet.properties.climate}</li>
										<li>Terrain: {planet.properties.terrain}</li>
									</ul>
								</div>
								<div className="card-footer">
									<button
										className="btn btn-danger btn-sm float-end"
										onClick={() => setSelected(null)}>
										Close
									</button>
								</div>
							</div>
						)}
				</div>
			</div>
			<div className="container">
				<h1>Planets</h1>
				<div className="row">
					{store.planets.map((value, i) => {
						return (
							<div key={i} className="col-md-4 mb-3">
								<div className="card" style={{ width: "18rem" }}>
									<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title">{value.name}</h5>
										<p className="card-text">{value.name}</p>
										<button
											className="btn btn-outline-success"
											onClick={() => {
												setSelected(value.uid);
											}}>
											Learn More!
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
