import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(null);
	const [vehicle, setvehicle] = useState(null);

	console.log(vehicle);

	useEffect(
		() => {
			if (selected !== null) {
				buscavehicle(selected);
				console.log(vehicle);
			}
		},
		[selected]
	);

	function buscavehicle(uid) {
		for (let i = 0; i < store.vehicle.length; i++) {
			if (uid === store.vehicle[i].uid) {
				setvehicle(store.vehicle[i]);
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
						!!vehicle && (
							<div className="card detail">
								<img src="..." className="card-img-top" alt="..." />
								<div className="card-body">
									<h5 className="card-title">{vehicle.properties.name}</h5>
									<p className="card-text">{vehicle.description}</p>
									<ul>
										<li>Model: {vehicle.properties.model}</li>
										<li>Vechicle class: {vehicle.properties.vehicle_class}</li>
										<li>Manufacturer: {vehicle.properties.manufacturer}</li>
										<li>Cost in credits: {vehicle.properties.cost_in_credits}</li>
										<li>length: {vehicle.properties.length}</li>
										<li>Crew: {vehicle.properties.crew}</li>
										<li>Max atmosphering speed: {vehicle.properties.max_atmosphering_speed}</li>
										<li>Cargo capacity: {vehicle.properties.cargo_capacity}</li>
										<li>Consumable: {vehicle.properties.consumables}</li>
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
