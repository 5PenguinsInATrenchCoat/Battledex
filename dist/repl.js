export function cleanInput(input) {
    //process the REPL input, returning an array of cleaned words
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}
export function startREPL(userState) {
    //const command_list = getCommands();
    userState.readline.prompt();
    userState.readline.on('line', (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            userState.readline.prompt();
            return;
        }
        else {
            if (cleanedInput[0] in userState.commands) {
                const command = userState.commands[cleanedInput[0]];
                command.callback(userState);
            }
            else {
                console.log(`Unknown command`);
            }
            userState.readline.prompt();
        }
    });
}
;
