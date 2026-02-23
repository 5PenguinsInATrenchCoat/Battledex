import { State } from "./state.js"


export async function commandViewTeam(state: State, ...args: string[]) {
  if (state.poketeam.length == 0) {
    console.log("Your team is currently empty!")
    return
  }
  let weaknessChart: Record<string, number> = {} // create early so we only need to loop once
  
  console.log("Your current team:")
  for (const pokemon of state.poketeam) {
    console.log(` - ${pokemon.name}`) // What we actually want to print at this time
    
    // Everything below is here so we only need to loop once
    
    for (const poketype of pokemon.types) {
      const typeData = await state.pokeAPI.fetchType(poketype.type.name)
    }
  }
  console.log("")
  console.log("Weaknesses:")

  for (const weakness of Object.keys(weaknessChart)) {
    console.log(` - ${weakness}: ${weaknessChart[weakness]}x`)
  }

  console.log("")
  console.log("Resistances:")



  console.log("")
  console.log("Immunities:")

  
}
