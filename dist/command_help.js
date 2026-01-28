export function commandHelp(state) {
    console.log("Welcome to the Pokedex!\nUsage:\n\n");
    for (let command of Object.values(state.commands)) {
        // Goes through each command and prints each name and description
        console.log(`${command.name}: ${command.description}`);
    }
}
