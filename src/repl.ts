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


export function startREPL(userState: State) {
    //const command_list = getCommands();
    userState.readline.prompt();
    userState.readline.on('line', (input: string) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            userState.readline.prompt();
            return;
        } else {
            if (cleanedInput[0] in userState.commands) {
                const command = userState.commands[cleanedInput[0]];
                command.callback(userState);
            } else {
                console.log(`Unknown command`);
            }
            userState.readline.prompt();
        }
    }
);};


