import type { State } from "./state.js";

export async function commandHelp(state: State) {
    
    console.log(
        "Welcome to the Pokedex!\nUsage:\n\n" );
    
    for (let command of Object.values(state.commands)) {
        // Goes through each command and prints each name and description
        console.log(`${command.name}: ${command.description}`)
    }
    

    
}
