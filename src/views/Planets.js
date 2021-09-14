import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

import '../index.css';

export const Planets = ({ history }) => {

    const { namePlanet } = useParams();
    const { store: { planets: { data, loading } } } = useContext(Context);
    const [planetItem, setPlanetItem] = useState([]);

    useEffect(() => {
        if (!loading) {
            const _planet = data.results.find(({ name: _name }) => _name === namePlanet);
            setPlanetItem(_planet);
        }
    }, [loading])

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className="card my-3 p-4 bg-light">
            <div className="row g-0">
                <div className="col-5">
                    <img
                        src={`../assets/imgs/planets/${namePlanet}.jpg`}
                        alt={namePlanet}
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h3 className="card-title">{namePlanet}</h3>
                        <hr />
                        {
                            !!planetItem &&
                            <div className="list-group">
                                <p className="text-body"><b>Rotation period: </b>{planetItem.rotation_period}</p>
                                <p className="text-body"><b>Orbital period: </b>{planetItem.orbital_period}</p>
                                <p className="text-body"><b>Diameter: </b>{planetItem.diameter}</p>
                                <p className="text-body"><b>Climate: </b>{planetItem.climate}</p>
                                <p className="text-body"><b>Gravity: </b>{planetItem.gravity}</p>
                                <p className="text-body"><b>Terrain: </b>{planetItem.terrain}</p>
                                <p className="text-body"><b>Surface water: </b>{planetItem.surface_water}</p>
                                <p className="text-body"><b>Population: </b>{planetItem.population}</p>
                            </div>
                        }
                        <hr />

                        <button
                            className="btn btn-warning"
                            onClick={handleReturn}
                        >
                            Return
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
