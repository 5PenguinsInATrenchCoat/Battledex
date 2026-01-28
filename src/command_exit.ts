import { State } from "./state.js";

export function commandExit(state: State) {
    console.log("Closing the Pokedex... Goodbye!");
    state.readline.close();
    process.exit(0);
    // Exit the process with a success code
}
