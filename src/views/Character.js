import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Context } from '../store/appContext';

export const Character = ({ history }) => {

    const { name } = useParams();
    const { store: { people: { data, loading } } } = useContext(Context);
    const [peopleItem, setPeopleItem] = useState([]);

    useEffect(() => {
        if (!loading) {
            const _ppl = data.results.find(({ name: _name }) => _name === name);
            setPeopleItem(_ppl);
            console.log(_ppl);
        }
    }, [loading])

    const handleReturn = () => {
        history.goBack();
    }

    return (
        <div className="card my-3 p-4">
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
