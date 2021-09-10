import React, { useContext } from 'react'
import { Context } from '../store/appContext';

export const CharactersView = () => {

    const { store: { characters } } = useContext(Context);
    const { data: charData, loading } = characters;

    return (
        <div>
            <h1>Characters</h1>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
                {
                    !loading &&
                    charData.results.map(char => (
                        <div
                            key={char.uid}
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
