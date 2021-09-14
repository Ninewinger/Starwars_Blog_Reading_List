import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

import '../index.css';

export const Starship = ({ history }) => {

    const { nameStarship } = useParams();
    const { store: { starships: { data, loading } } } = useContext(Context);
    const [starshipItem, setStarshipItem] = useState([]);

    useEffect(() => {
        if (!loading) {
            const _starship = data.results.find(({ name: _name }) => _name === nameStarship);
            setStarshipItem(_starship);
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
                        src="../assets/imgs/placeholder.png"
                        alt={nameStarship}
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h3 className="card-title">{nameStarship}</h3>
                        <hr />
                        {
                            !!starshipItem &&
                            <div className="list-group">
                                <p className="text-body"><b>Model: </b>{starshipItem.model}</p>
                                <p className="text-body"><b>Manufacturer: </b>{starshipItem.manufacturer}</p>
                                <p className="text-body"><b>Cost in credits: </b>{starshipItem.cost_in_credits}</p>
                                <p className="text-body"><b>Length: </b>{starshipItem.length}</p>
                                <p className="text-body"><b>Max atmosphering speed: </b>{starshipItem.max_atmosphering_speed}</p>
                                <p className="text-body"><b>Crew: </b>{starshipItem.crew}</p>
                                <p className="text-body"><b>Cargo capacity: </b>{starshipItem.cargo_capacity}</p>
                                <p className="text-body"><b>Consumables: </b>{starshipItem.consumables}</p>
                                <p className="text-body"><b>Hyperdrive rating: </b>{starshipItem.hyperdrive_rating}</p>
                                <p className="text-body"><b>Starship class: </b>{starshipItem.starship_class}</p>
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
