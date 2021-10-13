import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Vehicles = () => {
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
		for (let i = 0; i < store.vehicle.length; i++) {
			if (uid === store.vehicle[i].uid) {
				setChar(store.vehicle[i]);
			}
		}
	}
	const card = store.vehicles.map((value, i) => {
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
										<li>Model: {char.properties.model}</li>
										<li>Vechicle class: {char.properties.vehicle_class}</li>
										<li>Manufacturer: {char.properties.manufacturer}</li>
										<li>Cost in credits: {char.properties.cost_in_credits}</li>
										<li>length: {char.properties.length}</li>
										<li>Crew: {char.properties.crew}</li>
										<li>Max atmosphering speed: {char.properties.max_atmosphering_speed}</li>
										<li>Cargo capacity: {char.properties.cargo_capacity}</li>
										<li>Consumable: {char.properties.consumables}</li>
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
				<h1>Vehicles</h1>
				<div className="row">{card}</div>
			</div>
		</>
	);
};
