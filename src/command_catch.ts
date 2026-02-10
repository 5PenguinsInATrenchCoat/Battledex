import { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
  const pokeName = args[0].toLowerCase() // Just the name
  const pokemon = await state.pokeAPI.fetchPokemon(pokeName); // The full pokemon object, gotten using the name
    
  console.log(`Throwing a Pokeball at ${pokeName}...`);

  let catchChance = Math.random() * 1000; // Roll a number between 1-1000, compare with base experience
  
  // Simulate catching the Pokemon with base experience, if the roll is greater than the base experience it succeeds
  if (catchChance > pokemon.base_experience) { 
    console.log(`${pokeName} was caught!`);
    state.pokedex[pokeName] = pokemon; // Add the caught Pokemon to the pokedex
  } else {
    console.log(`${pokeName} escaped!`); // Nothing else needs to happen on a failed catch
  }
  
}
