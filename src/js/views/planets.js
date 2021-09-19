import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(null);
	const [char, setChar] = useState(null);

	useEffect(() => {
		if (selected !== null) {
			buscaChar(selected);
			console.log(char);
		}
	}, []);

	function buscaChar(uid) {
		for (let i = 0; i < store.planet.length; i++) {
			if (uid === store.planet[i].uid) {
				setChar(store.planet[i]);
			}
		}
	}
	const card = store.planets.map((value, i) => {
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
	});

	return (
		<>
			<div className="row">
				<div className="col-md-8 offset-md-2 py-5">
					{!!selected &&
						!!char && (
							<div className="card detail">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{char.properties.name}</h5>
									<p className="card-text">{char.description}</p>
									<ul>
										<li>Diameter: {char.properties.diameter}</li>
										<li>Rotation period: {char.properties.rotation_period}</li>
										<li>Orbital period: {char.properties.orbital_period}</li>
										<li>Gravity: {char.properties.gravity}</li>
										<li>Population: {char.properties.population}</li>
										<li>Climate: {char.properties.climate}</li>
										<li>Terrain: {char.properties.terrain}</li>
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
				<div className="row">{card}</div>
			</div>
		</>
	);
};
