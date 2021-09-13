import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(null);

	const card = store.planets.map((value, i) => {
		return (
			<div key={i} className="col-md-4 mb-3">
				<div className="card" style={{ width: "18rem" }}>
					<img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{value.name}</h5>
						<p className="card-text">{value.name}</p>
						{/* 						<ul>
							<li>{value.height}</li>
							<li>{value.mass}</li>
							<li>{value.hair_color}</li>
							<li>{value.skin_color}</li>
							<li>{value.eye_color}</li>
							<li>{value.birth_year}</li>
							<li>{value.gender}</li>
							<li>{value.homeworld}</li>
						</ul> */}
						<button className="btn btn-outline-success" onClick={() => setSelected(value)}>
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
					{!!selected && (
						<div className="card detail">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{selected.name}</h5>
								<p className="card-text">{selected.description}</p>
							</div>
							<div className="card-footer">
								<button className="btn btn-danger btn-sm float-end" onClick={() => setSelected(null)}>
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
