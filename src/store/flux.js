
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
            },
            favs: []
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
                        const { getShip, getHomeplanet } = getActions();
                        if (list === 'people') {
                            data.results.forEach((ppl) => {
                                if (ppl.starships.length > 0) {
                                    ppl.starships.forEach((url) => {
                                        getShip(url)
                                    })
                                }
                                getHomeplanet(ppl.homeworld);
                            })
                        }
                    })
                    .catch(err => console.log(err))
            },
            getShip: (_url) => {
                const { starships } = getStore();
                const _check = starships.data.results.find(({ url }) => url === _url);
                if (_check !== undefined) return;
                else {
                    fetch(_url)
                        .then(resp => resp.json())
                        .then(data => {
                            starships.data.results.push(data)
                            setStore({
                                starships: {
                                    ...starships,
                                    data: {
                                        ...starships.data,
                                        results: [...starships.data.results]
                                    }
                                }
                            })
                        })
                }
            },
            getHomeplanet: (_url) => {
                const { planets } = getStore();
                const _check = planets.data.results.find(({ url }) => url === _url);
                if (_check !== undefined) return;
                fetch(_url)
                    .then(resp => resp.json())
                    .then(data => {
                        planets.data.results.push(data);
                        setStore({
                            planets: {
                                ...planets,
                                data: {
                                    ...planets.data,
                                    results: [...planets.data.results]
                                }
                            }
                        })
                    })
            },
            addFav: (item) => {
                const { favs } = getStore();
                setStore({
                    favs: [...favs, item]
                })
            },
            removeFav: (name) => {
                const { favs } = getStore();
                const newFavs = favs.filter(_item => _item.name !== name);
                setStore({
                    favs: newFavs
                })
            }
        }
    }
}