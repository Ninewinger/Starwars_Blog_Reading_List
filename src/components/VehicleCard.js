import React from 'react'
import { Link } from 'react-router-dom'

export const VehicleCard = ({
    name,
}) => {
    return (
        <Link to='/' className="link-card">
            <div className='card'>
                <img
                    src="./assets/imgs/placeholder.png"
                    alt={name}
                    className='card-img-top'
                />
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                </div>
            </div>

        </Link>
    )
}
