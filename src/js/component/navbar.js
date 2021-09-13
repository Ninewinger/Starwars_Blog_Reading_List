import React from "react";
import { Link } from "react-router-dom";
import { GiStarfighter } from "@react-icons/all-files/gi/GiStarfighter";

export const Navbar = () => {
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
					</ul>
				</div>
			</nav>

			<div className="ml-auto">
				<Link to="/demo">
					<button type="button" className="btn btn-primary">
						Favorite <span className="badge badge-light">4</span>
					</button>
				</Link>
			</div>
		</nav>
	);
};
