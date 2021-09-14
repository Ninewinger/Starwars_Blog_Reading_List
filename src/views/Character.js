import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '../index.css';

export const Character = ({ history }) => {

    const { name } = useParams();
    const { store: { people: { data, loading }, planets: { data: dataPlanet, loading: loadingPlanet }, starships: { data: dataStarships, loading: loadingShip } } } = useContext(Context);
    const [peopleItem, setPeopleItem] = useState([]);
    const [homeWorld, setHomeWorld] = useState(undefined);
    const [ships, setShips] = useState([]);

    useEffect(() => {
        if (!loading) {
            const _ppl = data.results.find(({ name: _name }) => _name === name);
            setPeopleItem(_ppl);
        }
    }, [loading])

    useEffect(() => {
        matchPlanet();
        matchStarships();
    }, [peopleItem])

    const matchPlanet = () => {
        if (!loadingPlanet) {
            const _temp = dataPlanet.results.find(({ url }) => url === peopleItem.homeworld);
            if (_temp !== undefined) {
                setHomeWorld(_temp);
            }
        }
    }

    const matchStarships = () => {
        if (!loadingShip) {
            peopleItem.starships?.forEach((_ship) => {
                const _temp = dataStarships.results.find(({ url }) => url === _ship);
                if (_temp !== undefined) {
                    setShips(p => {
                        p.push(_temp);
                        return p;
                    });
                }
            })
        }
    }

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className="card my-3 p-4 bg-light">
            <div className="row g-0">
                <div className="col-5">
                    <img
                        src={`../assets/imgs/characters/${name}.jpg`}
                        alt={name}
                        className="img-fluid rounded-start"
                    />
                </div>
                <div className="col-7">
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <hr />
                        {
                            !!peopleItem &&
                            <div className="list-group">
                                <p className="text-body"><b>Birth year: </b>{peopleItem.birth_year}</p>
                                <p className="text-body"><b>Eye color: </b>{peopleItem.eye_color}</p>
                                <p className="text-body"><b>Gender: </b>{peopleItem.gender}</p>
                                <p className="text-body"><b>Hair color: </b>{peopleItem.hair_color}</p>
                                <p className="text-body"><b>Height: </b>{peopleItem.height}cm</p>
                                <p className="text-body"><b>Mass: </b>{peopleItem.mass}kg</p>
                                <p className="text-body"><b>Skin color: </b>{peopleItem.skin_color}</p>
                                {
                                    homeWorld !== undefined &&
                                    <p className="text-body"><b>Home World: </b><Link to={`/planet/${homeWorld.name}`}>{homeWorld.name}</Link></p>
                                }
                                {
                                    (ships.length > 0) &&
                                    <p className="text-body"><b>Starships: </b>
                                        {
                                            ships.map((_ship, index) => {
                                                return <span key={_ship.name}><Link to={`/starship/${_ship.name}`}>{_ship.name}</Link>{(ships.length > 1 && (index + 1) !== ships.length) ? ", " : ""}</span>
                                            })
                                        }
                                    </p>
                                }
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
