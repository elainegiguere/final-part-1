class VehiculesService {
	constructor() { }

	url = "https://swapi.dev/api/vehicules";


	// méthode pour aller chercher tout les véhicules
	async getVehicules() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();

			return data;
		} catch (e) {
			console.error(e);

			return  [];
			
		}
    }

	async getVehiculesById(id) {
		try {
			const response = await fetch(`${this.url}/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}
}


export default VehiculesService;