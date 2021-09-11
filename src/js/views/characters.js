import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	const card = store.characters.map((value, i) => {
		return (
			<div key={i} className="card" style={{ width: "18rem" }}>
				<img src="..." className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">{value.name}</h5>
					<p className="card-text" />
					<a href="#" className="btn btn-primary">
						Go somewhere
					</a>
				</div>
			</div>
		);
	});
	return (
		<div className="container">
			<h1>Characters</h1>
			{card}
		</div>
	);
};
