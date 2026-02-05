import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {    
    const encounter_list = await state.pokeAPI.fetchLocation(args[0]);

    console.log(`Exploring ${args[0]}...`)
    console.log("Found Pokemon:");

    for (const encounter of encounter_list.pokemon_encounters) {
        console.log(` - ${encounter.pokemon.name}`);
    }
}
