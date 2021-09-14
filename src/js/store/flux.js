const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: [],
			vehicles: [],
			vehicle: [],
			planets: [],
			planet: []
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
						console.log(data);
						setStore({ characters: data.results });
						fetch(data.url)
							.then(response => response.json())
							.then(data => {
								console.log(data.result);
								setStore({ character: data.result });
							});
					});
			},

			loadVehicles: (page = 1, limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=${limit}`)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicles: data.results });
					});
			},
			loadVehicle: (uid = 1) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicle: data });
					});
			},

			loadPlanets: (page = 1, limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=${limit}`)
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data.results });
					});
			},
			loadPlanet: (uid = 1) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(response => response.json())
					.then(data => {
						setStore({ planet: data });
					});
			}
		}
	};
};

export default getState;
