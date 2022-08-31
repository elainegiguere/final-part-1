class FilmsService {
	constructor() { }

	url = "https://swapi.dev/api/films/";

	async getFilms() {
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

	
}

export default FilmsService;