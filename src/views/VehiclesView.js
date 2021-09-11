import React, { useContext } from 'react';
import { VehicleCard } from '../components/VehicleCard';
import { Context } from '../store/appContext';

export const VehiclesView = () => {

    const { store: { vehicles } } = useContext(Context);
    const { data: vehicleData, loading } = vehicles;

    return (
        <div>
            <h1>Vehicles</h1>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-2 g-sm-3">
                {
                    !loading &&
                    vehicleData.results.map(vehicle => (
                        <div
                            key={vehicle.name}
                            className="col"
                        >
                            <VehicleCard {...vehicle} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
