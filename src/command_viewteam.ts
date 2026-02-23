import { State } from "./state.js"


export async function commandViewTeam(state: State, ...args: string[]) {
  if (state.poketeam.length == 0) {
    console.log("Your team is currently empty!")
    return
  }
  let weaknessChart: Record<string, number> = {} // create early so we only need to loop once
  
  console.log("Your current team:")
  for (const pokemon of state.poketeam) {
    console.log(` - ${pokemon.name}`)
    for (const poketype of pokemon.types) {
      weaknessChart[poketype.type.name] = (weaknessChart[poketype.type.name] + 1) || 1
    }
  }
  console.log("")
  console.log("Weaknesses:")

  for (const weakness of Object.keys(weaknessChart)) {
    console.log(` - ${weakness}: ${weaknessChart[weakness]}x`)
  }

  
}
