import React, { useContext } from 'react'
import { CharacterCard } from '../components/CharacterCard';
import { Context } from '../store/appContext';

export const CharactersView = () => {

    const { store: { people } } = useContext(Context);
    const { data: charData, loading } = people;

    return (
        <div>
            <h1>Characters</h1>
            <hr />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5  g-2 g-sm-3">
                {
                    !loading &&
                    charData.results.map(char => (
                        <div
                            key={char.name}
                            className="col"
                        >
                            <CharacterCard {...char} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
