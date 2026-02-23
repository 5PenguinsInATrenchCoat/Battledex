import { State } from "./state.js";
import type { Pokemon } from "./pokeapi.js";

export async function commandRemove(state: State, ...args: string[]) {
    if (state.poketeam.length == 0) { // Checked before anything is processed
        console.log("You have no pokemon in your team!");
        return // Exits early if no party members to remove
    }
    const pokename = args[0]
    let delMember: Pokemon | null = null; // delMember can be a Pokemon object or null, initially sets it to null

    if (!pokename) { // Only runs when addteam is called with no other input
        console.log("Usage: remove <pokemon name>")
        return
    }
    
    try {
        delMember = await state.pokeAPI.fetchPokemon(pokename);
    } catch { // If the name isn't found through pokeAPI
        console.log("Please enter a valid pokemon name");
        return
    }
    // TODO: LOGIC IS BACKWARDS, IF THE NAME ISN'T FOUND IN THE TEAM IT SAYS IT'S NOT IN THE TEAM, IF IT IS FOUND IN THE TEAM IT SAYS IT'S NOT IN THE TEAM, THEN REMOVES IT ANYWAYS
    // CHECK: SEE IF 4X WEAKNESS IS COUNTED PROPERLY, CHECK IF WEAKNESS CHART UPDATES PROPERLY AFTER REMOVAL
    // CHECK: SEE IF LOGIC CHANGE WORKED
    if (state.poketeam.some(p => p.name !== delMember!.name)) { // No commonly used format allows for multiple of the same pokemon, so multiples will never be allowed
        console.log(`${delMember!.name} is not in your team!`)
    } else {
        state.poketeam = state.poketeam.filter(p => p.name != delMember!.name)
        // p is each pokemon, checks if the name of each pokemon is not the same as the name of the pokemon to be removed, if it isn't the same it is kept in the team, if it is the same it is removed from the team
        console.log(`${delMember!.name} has been removed from your team!`)
    }
}
