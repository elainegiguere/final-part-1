class PeoplesService {
	constructor() { }

	url = "https://swapi.dev/api/people";


	// méthode pour aller chercher tout les films
	async getPeoples() {
		try {
			const response = await fetch(this.url);
			if (!response.ok) throw new Error(response.statusText);
			const data = await response.json();
			console.log(data);

			return data;
		} catch (e) {
			console.error(e);

			return  [];
			
		}
    }

	
	async getPeopleById(id) {
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


export default PeoplesService;