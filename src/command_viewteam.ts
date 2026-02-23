import Type { State } from state.js


export async function commandViewTeam(state: State, ...args: string[]) {
  if (self.poketeam.length) == 0 {
    console.log("Your team is currently empty!")
    return
  }
  let weaknessChart: Record<string, number> = {} // create early so we only need to loop once
  
  console.log("Your current team:")
  for (const pokemon of self.poketeam) {
    console.log(` - ${pokemon.name}`)
    for (const type of pokemon.type) {
      // add weaknesses to weaknessChart
    }
  }
  console.log("")
  console.log("Weaknesses:")

  let weaknessChart: Record<string, number> = {}
  
}
