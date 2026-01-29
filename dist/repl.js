export function cleanInput(input) {
    //process the REPL input, returning an array of cleaned words
    return input
        .toLowerCase()
        .trim()
        .split(" ")
        .filter((word) => word !== "");
}
export async function startREPL(userState) {
    userState.readline.prompt();
    userState.readline.on('line', async (input) => {
        const cleanedInput = cleanInput(input);
        if (cleanedInput.length === 0) {
            userState.readline.prompt();
            return;
        }
        else {
            if (cleanedInput[0] in userState.commands) {
                const command = userState.commands[cleanedInput[0]];
                try {
                    await command.callback(userState);
                }
                catch (err) {
                    console.log(`error:`, err.message);
                }
            }
            else {
                console.log(`Unknown command`);
            }
            userState.readline.prompt();
        }
    });
}
;
