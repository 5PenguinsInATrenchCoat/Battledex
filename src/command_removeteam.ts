import { State } from "./state.js";
import type { Pokemon } from "./pokeapi.js";

export async function commandAdd(state: State, ...args: string[]) {
    if (state.poketeam.length == 0) { // Checked before anything is processed
        console.log("You have no pokemon in your team!");
        return // Exits early if no party members to remove
    }
    const pokename = args[0]
    let delMember: Pokemon | null = null; // delMember can be a Pokemon object or null, initially sets it to null

    if (!pokename) { // Only runs when addteam is called with no other input
        console.log("Usage: delteam <pokemon name>")
        return
    }
    
    try {
        delMember = await state.pokeAPI.fetchPokemon(pokename);
    } catch { // If the name isn't found through pokeAPI
        console.log("Please enter a valid pokemon name");
        return
    }

    if (state.poketeam.some(p => p.name === delMember!.name)) { // No commonly used format allows for multiple of the same pokemon, so multiples will never be allowed
        console.log(`${delMember!.name} is not in your team!`)
    } else {
        state.poketeam.delete(delMember!);
    }
}
