import { createInterface } from "readline";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { PokeAPI } from "./pokeapi.js";
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
export function initState() {
    const REPL = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex> ",
    });
    return {
        readline: REPL,
        commands: getCommands(),
        pokeapi: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
    };
}
