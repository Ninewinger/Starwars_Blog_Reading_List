
export const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            baseURL: 'https://www.swapi.tech/api',
            characters: {
                loading: true,
                data: null
            },
            planets: {
                loading: true,
                data: null
            }
        },
        actions: {
            getCharacters: () => {
                const { baseURL } = getStore();
                fetch(`${baseURL}/people`)
                    .then(resp => resp.json())
                    .then(data => {
                        setStore({
                            characters: {
                                loading: false,
                                data
                            }
                        })
                    })
                    .catch(err => console.log(err))
            },
            getPlanets: () => {
                const { baseURL } = getStore();
                fetch(`${baseURL}/planets`)
                    .then(resp => resp.json())
                    .then(data => setStore({
                        planets: {
                            loading: false,
                            data
                        }
                    }))
                    .catch(err => console.log(err))
            }
        }
    }
}