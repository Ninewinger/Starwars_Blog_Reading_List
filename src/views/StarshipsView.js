import React, { useContext } from 'react';
import { StarshipCard } from '../components/StarshipCard';
import { Context } from '../store/appContext';

export const StarshipsView = () => {

    const { store: { starships } } = useContext(Context);
    const { data: vehicleData, loading } = starships;

    return (
        <div>
            <h1>Starships</h1>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-2 g-sm-3">
                {
                    !loading &&
                    vehicleData.results.map(starship => (
                        <div
                            key={starship.name}
                            className="col"
                        >
                            <StarshipCard {...starship} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
