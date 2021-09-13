import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext'

export const CharacterCard = ({ name }) => {

    const { store, actions } = useContext(Context);

    const handleFav = () => {

    }
    return (
        <div className='card'>
            <Link to={`/character/${name}`} className="link-card">
                <img
                    src={`./assets/imgs/characters/${name}.jpg`}
                    alt={name}
                    className='card-img-top'
                />
            </Link>
            <div className='card-body'>
                <div className="row">
                    <div className="col-10">
                        <Link to={`/character/${name}`} className="link-card">
                            <h5 className='card-title'>{name}</h5>
                        </Link>
                    </div>
                    <div className="col-2"><i class="far fa-star" onClick={handleFav}></i></div>
                </div>
            </div>
        </div>

    )
}
