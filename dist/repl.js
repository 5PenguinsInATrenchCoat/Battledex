import { createInterface } from "readline";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}
const REPL = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex> ",
});
export function startREPL() {
    const command_list = getCommands();
    REPL.prompt();
    REPL.on('line', (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            REPL.prompt();
            return;
        }
        else {
            if (cleanedInput[0] in command_list) {
                const command = command_list[cleanedInput[0]];
                command.callback(command_list);
            }
            else {
                console.log(`Unknown command`);
            }
            REPL.prompt();
        }
    });
}
;
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "Lists all available commands",
            callback: commandHelp,
        },
    };
}
