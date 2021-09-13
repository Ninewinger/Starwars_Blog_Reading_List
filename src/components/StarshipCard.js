import React, { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/appContext';

export const StarshipCard = ({ name }) => {

    const { store, actions } = useContext(Context);

    const handleFav = () => {

        if (checkFav()) {
            actions.removeFav(name);
        } else {
            actions.addFav({
                type: 'starship',
                name
            });
        }
    }

    const checkFav = () => {
        return store.favs.find(item => item.name === name)
    }

    const fav = useMemo(() => checkFav(), [store.favs])

    return (
        <div className='card'>
            <Link to={`/starship/${name}`} className="link-card">
                <img
                    src="./assets/imgs/placeholder.png"
                    alt={name}
                    className='card-img-top'
                />
            </Link>
            <div className='card-body'>
                <div className="row">
                    <div className="col-10">
                        <Link to={`/starship/${name}`} className="link-card">
                            <h5 className='card-title'>{name}</h5>
                        </Link>
                    </div>
                    <div className="col-2"><i className={fav ? "fas fa-star" : "far fa-star"} onClick={handleFav}></i></div>
                </div>
            </div>
        </div>
    )
}
