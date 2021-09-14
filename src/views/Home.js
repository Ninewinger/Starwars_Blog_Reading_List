import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Star Wars Databank</h1>
            <hr />
            <div className="row">
                <div className="col-12 col-md-6">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link className="nav-link" to="/characters">
                                Characters
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/planets">
                                Planets
                            </Link>
                        </li>
                        <li className="list-group-item">
                            <Link className="nav-link" to="/starships">
                                Starships
                            </Link>
                        </li>

                    </ul>

                </div>
            </div>
        </div >
    )
}
