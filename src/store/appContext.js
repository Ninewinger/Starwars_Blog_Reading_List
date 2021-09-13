import React, { useEffect, useState } from 'react';
import { getState } from './flux.js';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    const StoreWrapper = props => {
        const [state, setState] = useState(
            getState({
                getStore: () => state.store,
                getActions: () => state.actions,
                setStore: (updatedStore = {}) =>
                    setState({
                        store: Object.assign(state.store, updatedStore),
                        actions: { ...state.actions }
                    })
            })
        )

        useEffect(() => {
            state.actions.getLists('people');
            state.actions.getLists('planets');
            state.actions.getLists('starships');
        }, []);

        return (
            <Context.Provider value={state}>
                <PassedComponent {...props} />
            </Context.Provider>
        )
    }

    // Retorna una componente, y los componentes se ejecutan cuando son usados
    return StoreWrapper;
}

export default injectContext;