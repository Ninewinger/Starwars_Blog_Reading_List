import React, { useContext } from 'react';
import { PlanetCard } from '../components/PlanetCard';
import { Context } from '../store/appContext';

export const PlanetsView = () => {

    const { store: { planets } } = useContext(Context);
    const { data: planetsData, loading } = planets;

    return (
        <div>
            <h1>Planets</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-2 g-lg-3">
                {
                    !loading &&
                    planetsData.results.map(planet => (
                        <div
                            key={planet.name}
                            className="col"
                        >
                            <PlanetCard {...planet} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
