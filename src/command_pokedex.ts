import { State } from "./state.js";

export async function commandPokedex(state: State) {
    console.log("Your Pokedex:");

    const entries = Object.entries(state.pokedex);
    if (entries.length === 0) {
        console.log("Your pokedex is empty.");
    } else {
        for (const mon of entries) {
            console.log(` - ${mon[0]}`)
        }
    }
}