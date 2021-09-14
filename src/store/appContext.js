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
            const _temp = localStorage.getItem('store');
            if (_temp) {
                const _localState = JSON.parse(_temp);
                setState({
                    store: Object.assign(state.store, _localState),
                    actions: { ...state.actions }
                });
            } else {
                state.actions.getLists('people');
                state.actions.getLists('planets');
                state.actions.getLists('starships');
            }
        }, []);

        useEffect(() => {
            const localStore = JSON.stringify(state.store);
            localStorage.setItem('store', localStore);
        }, [state])

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