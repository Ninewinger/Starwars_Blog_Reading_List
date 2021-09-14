
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
            favs: [],
            naves: [],
            homes: []
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
                const { naves } = getStore();
                const _check = naves.find(({ url }) => url === _url);
                if (!!_check) return;
                else {
                    fetch(_url)
                        .then(resp => resp.json())
                        .then(data => {
                            naves.push(data)
                            setStore({
                                naves: [
                                    ...naves
                                ]
                            })
                        })
                }
            },
            getHomeplanet: (_url) => {
                const { homes } = getStore();
                const _check = homes.find(({ url }) => url === _url);
                if (!!_check) return;
                fetch(_url)
                    .then(resp => resp.json())
                    .then(data => {
                        homes.push(data)
                        setStore({
                            homes: [
                                ...homes
                            ]
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