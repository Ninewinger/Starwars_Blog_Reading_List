import React from 'react'
import { Link } from 'react-router-dom'

export const PlanetCard = ({
    name,
}) => {
    return (
        <div className='card'>
            <div className='row g-0'>
                <div className='col-4'>
                    <img
                        src='...'
                        alt={name}
                        className='card-img'
                    />
                </div>
                <div className='col-8'>
                    <div className='card-body'>
                        <h5 className='card-title'>{name}</h5>
                        <Link to='/' className='link-card'>Más</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
