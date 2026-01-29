export class PokeAPI {
    static BASE_URL = 'https://pokeapi.co/api/v2';
    constructor() { }
    //called each time PokeAPI is instantiated
    async fetchLocations(pageURL) {
        const url = pageURL ?? `${PokeAPI.BASE_URL}/location-area?limit=20`;
        const response = await fetch(url);
        const data = await response.json();
        //response is the direct data from pokeAPI, data is after converting the data into a JSON and is in a more usable format
        return data;
        // data is already formatted as ShallowLocations, so we can just return it
    }
    async fetchLocation(locationName) {
        const url = `${PokeAPI.BASE_URL}/location-area/${locationName}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
}
