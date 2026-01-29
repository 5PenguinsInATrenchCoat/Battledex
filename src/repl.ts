import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import type { CLICommand, State } from "./state.js"


export function cleanInput(input: string): string[] {
    //process the REPL input, returning an array of cleaned words
    return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((word) => word !== "");
}


export async function startREPL(userState: State) {
    
    userState.readline.prompt();

    userState.readline.on('line', async (input: string) => {
        const cleanedInput = cleanInput(input);
        
        if (cleanedInput.length === 0) {
            userState.readline.prompt();
            return;
        } else {
            if (cleanedInput[0] in userState.commands) {
                const command = userState.commands[cleanedInput[0]];
                try {
                    await command.callback(userState);
                } catch (err) {
                    console.log(`error:`, (err as Error).message);
                }
            } else {
                console.log(`Unknown command`);
            }
            userState.readline.prompt();
        }
    }
);};


