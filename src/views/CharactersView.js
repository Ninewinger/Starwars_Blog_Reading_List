import React, { useContext } from 'react'
import { Context } from '../store/appContext';

export const CharactersView = () => {

    const { store: { people } } = useContext(Context);
    const { data: charData, loading } = people;

    return (
        <div>
            <h1>Characters</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                {
                    !loading &&
                    charData.results.map(char => (
                        <div
                            key={char.name}
                            className="col"
                        >
                            {char.name}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
