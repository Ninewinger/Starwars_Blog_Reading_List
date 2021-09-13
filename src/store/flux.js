
export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            baseURL: 'https://swapi.dev/api',
            people: {
                loading: true,
                data: null
            },
            planets: {
                loading: true,
                data: null
            },
            starships: {
                loading: true,
                data: null
            }
        },
        actions: {
            getLists: (list) => {
                const { baseURL } = getStore();
                fetch(`${baseURL}/${list}`)
                    .then(resp => resp.json())
                    .then(data => {
                        const store = getStore();
                        setStore({
                            [list]: {
                                ...store[list],
                                loading: false,
                                data
                            }
                        });
                    })
                    .catch(err => console.log(err))
            }
        }
    }
}