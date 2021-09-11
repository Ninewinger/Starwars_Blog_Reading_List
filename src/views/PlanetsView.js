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
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-2 g-sm-3">
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
