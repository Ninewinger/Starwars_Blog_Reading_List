const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: (page = 1, limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/people?page=${page}&limit=${limit}`)
					.then(response => response.json())
					.then(data => {
						console.log(data.results);
						setStore({ characters: data.results });
					});
			},
			loadVehicles: (page = 1, limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=${limit}`)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ vehicles: data.results });
					});
			},
			loadPlanets: (page = 1, limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=${limit}`)
					.then(response => response.json())
					.then(data => {
						console.log(data);
						setStore({ planets: data.results });
					});
			}
		}
	};
};

export default getState;
