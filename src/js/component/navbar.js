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
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								data-toggle="dropdown"
								href="#"
								role="button"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
								<span className="badge badge-light ml-2">4</span>
							</a>
							<div className="dropdown-menu dropdown-menu-right">
								<a className="dropdown-item" href="#">
									Action
								</a>
								<a className="dropdown-item" href="#">
									Another action
								</a>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		</nav>
	);
};
