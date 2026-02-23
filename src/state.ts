import { createInterface, type Interface } from "readline";
import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { PokeAPI } from "./pokeapi.js";
import { commandMapForward } from "./command_map.js";
import { commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { Pokemon } from "./pokeapi.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";
import { commandAdd } from "./command_addteam.js";
import { commandRemove } from "./command_removeteam.js";
import { commandViewTeam } from "./command_viewteam.js";


export type CLICommand = {
    name: string;
    description: string;
    callback: (state: State, ...args: string[]) => Promise<void>;
    };

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
    pokedex: Record<string, Pokemon>;
    poketeam: Pokemon[]
};

export function getCommands(): Record<string, CLICommand> {
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
        map: {
            name: "map",
            description: "Show the next 20 locations",
            callback: commandMapForward,
        },
        mapb: {
            name: "mapb",
            description: "Show the previous 20 locations",
            callback: commandMapBack,
        },
        explore: {
            name: "explore",
            description: "Explore a location area to find Pokemon",
            callback: commandExplore,
        },
        catch: {
            name: "catch",
            description: "Attempt to catch a Pokemon by name",
            callback: commandCatch,
        },
        inspect: {
            name: "inspect",
            description: "Inspect a caught Pokemon by name",
            callback: commandInspect
        },
        pokedex: {
            name: "pokedex",
            description: "List caught Pokemon",
            callback: commandPokedex
        },
        addteam: {
            name: "addteam",
            description: "Add a Pokemon to your team",
            callback: commandAdd
        },
        removeteam: {
            name: "removeteam",
            description: "Remove a Pokemon from your team",
            callback: commandRemove
        },
        viewteam: {
            name: "viewteam",
            description: "View your current team and their weaknesses",
            callback: commandViewTeam
        }
    };
}

export function initState(): State {
    const REPL = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex> ",
});
    
    return {
        readline: REPL,
        commands: getCommands(),
        pokeAPI: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
        pokedex: {},
        poketeam: [],
    };
}
