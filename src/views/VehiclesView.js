import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const VehiclesView = () => {

    const { store: { vehicles } } = useContext(Context);
    const { data: vehicleData, loading } = vehicles;

    return (
        <div>
            <h1>Vehicles</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                {
                    !loading &&
                    vehicleData.results.map(vehicle => (
                        <div
                            key={vehicle.name}
                            className="col"
                        >
                            {vehicle.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
