import type { CLICommand } from "./state.js";

export function commandHelp(commands: Record<string, CLICommand>) {
    
    console.log(
        "Welcome to the Pokedex!\nUsage:\n\n" );
    
    for (let command of Object.values(commands)) {
        console.log(`${command.name}: ${command.description}`)
    }
    

    
}