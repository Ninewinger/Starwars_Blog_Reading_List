const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadCharacters: (page = 1 ,limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/people?page=${page}&limit=${limit}`)
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						setCharacters(data);
					});

			},
			loadVehicles: (page = 1 ,limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=${limit}`)
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						setCharacters(data);
					});

			},
			loadPlanets: (page = 1 ,limit = 20) => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=${limit}`)
					.then((response) => response.json())
					.then((data) => {
						console.log(data)
						setCharacters(data);
					});

			},
		}
	};
};

export default getState;
