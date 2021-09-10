import React from "react";
import { Link } from "react-router-dom";
import { GiStarfighter } from "@react-icons/all-files/gi/GiStarfighter";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<GiStarfighter />
				</span>
			</Link>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/characters">
								Characters <span className="sr-only">(current)</span>
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/vehicles">
								Vehicles
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/planets">
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
