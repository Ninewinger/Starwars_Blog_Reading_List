import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const [selected, setSelected] = useState(null);
	useEffect(() => {}, []);

	const card = store.characters.map((value, i) => {
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
					{!!selected && (
						<div className="card detail">
							<img src="..." className="card-img-top" alt="..." />
							<div className="card-body">
								<h5 className="card-title">{store.character.result}</h5>
								<p className="card-text">{store.character.description}</p>
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
				<h1>Characters</h1>
				<div className="row">{card}</div>
			</div>
		</>
	);
};
