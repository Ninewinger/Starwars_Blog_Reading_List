import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const NavBar = () => {

    const { store: { favs }, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">
                    <img id="logo-navbar" src="./assets/imgs/star-wars-4.svg" alt="star wars logo" />
                    {/* <img id="logo-navbar" src="./assets/imgs/logo-horizontal.png" /> */}
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact className="nav-link" to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/characters">
                                Characters
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/planets">
                                Planets
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/starships">
                                Starships
                            </NavLink>
                        </li>


                    </ul>
                    <ul className="navbar-nav me-4 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle d-flex align-items-center"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {
                                    favs.length > 0 &&
                                    <div className="fav mx-2 bg-warning px-2 rounded text-white">{favs.length}</div>
                                }
                                Favorites
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {
                                    favs.length === 0 ?
                                        <li className="dropdown-item">No favorites to show</li>
                                        :
                                        favs.map(item => (
                                            <li className="dropdown-item d-flex justify-content-between align-items-center">
                                                <Link to={`/${item.type}/${item.name}`} /* className="link-card" */><span>{item.name}</span>
                                                </Link>
                                                <i class="far fa-minus-square ms-2" onClick={() => actions.removeFav(item.name)}></i>
                                            </li>
                                        ))
                                }
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-warning" type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
