const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			character: [],
			vehicles: [],
			vehicle: [],
			planets: [],
			planet: [],
			favorite: ["uno", "dos", "tres"]
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadCharacters: async (page = 1, limit = 10) => {
				try {
					const characters = await fetch(`https://www.swapi.tech/api/people?page=${page}&limit=${limit}`);
					const resp = await characters.json();
					console.log(resp);
					setStore({ characters: resp.results });
					let list = [];
					const characterList = resp.results.map(async value => {
						const char = await fetch(value.url);
						const pchar = await char.json();
						list.push(pchar.result);
					});
					setStore({ character: list });
					console.log(list);
				} catch (error) {
					console.log(error);
				}
			},

			loadVehicles: async (page = 1, limit = 10) => {
				try {
					const vehicles = await fetch(`https://www.swapi.tech/api/vehicles?page=${page}&limit=${limit}`);
					const resp = await vehicles.json();
					console.log(resp);
					setStore({ vehicles: resp.results });
					let list = [];
					const vehicleList = resp.results.map(async value => {
						const vehi = await fetch(value.url);
						const pvehi = await vehi.json();
						list.push(pvehi.result);
					});
					setStore({ vehicle: list });
				} catch (error) {
					console.log(error);
				}
			},

			loadPlanets: async (page = 1, limit = 10) => {
				try {
					const planets = await fetch(`https://www.swapi.tech/api/planets?page=${page}&limit=${limit}`);
					const resp = await planets.json();
					console.log(resp);
					setStore({ planets: resp.results });
					let list = [];
					const planetList = resp.results.map(async value => {
						const plan = await fetch(value.url);
						const pplan = await plan.json();
						console.log(pplan.result);
						list.push(pplan.result);
					});
					setStore({ planet: list });
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;
