import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    const pokeName = args[0].toLowerCase();
    const pokemon = await state.pokeAPI.fetchPokemon(pokeName);


    if (!state.pokedex[pokeName]) {
        console.log("you have not caught that pokemon")
    } else {
        console.log(`Name: ${pokemon.name}`);
        console.log(`Stats:`);
        
        // Stat block
        let pos = 0;    // Counter to break out of stat loop
        for (const stat of pokemon.stats) {
            if (pos <= 5) {
            console.log(` -${pokemon.stats[pos].stat.name}: ${pokemon.stats[pos].base_stat}`); // Only processes the base stat, nothing more
            pos++;
            } else {
                break; // Exit the loop after processing 6 stats
            }

            console.log("")
            console.log("Learnset:")

            //for (const move of // TODO: CONTINUE HERE, PRINT EACH MOVE AND LEVEL FOR CURRENT SET GAME
        }


        // Type block
        console.log(`Types:`);
        for (const type of pokemon.types) {
            console.log(` -${type.type.name}`);
        }
    }


}
