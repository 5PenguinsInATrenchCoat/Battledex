import { State } from "./state.js";
import type { Pokemon } from "./pokeapi.js";

export async function commandAdd(state: State, ...args: string[]) {
    if (state.poketeam.length >= 6) { // Checked before anything is processed
        console.log("Your party is full, please remove a member before adding a new one");
        return // Exits early if party is already full
    }
    const pokename = args[0]
    let newMember: Pokemon | null = null; //Newmember can be a Pokemon object or null, initially sets it to null

    if (!pokename) { // Only runs when addteam is called with no other input
        console.log("Usage: addteam <pokemon name>")
        return
    }
    
    try {
        newMember = await state.pokeAPI.fetchPokemon(pokename);
    } catch { // If the name isn't found through pokeAPI
        console.log("Please enter a valid pokemon name");
        return
    }

    if (state.poketeam.some(p => p.name === newMember!.name)) { // No commonly used format allows for multiple of the same pokemon, so multiples will never be allowed
        console.log(`${newMember!.name} is already in your team!`)
    } else {
        state.poketeam.push(newMember!);
    }
}
