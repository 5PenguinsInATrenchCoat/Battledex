import type { State } from './state.js';

export async function commandMapForward(state: State): Promise<void>{
// If the next URL doens't exist, URL is undefined  
let URL = state.nextLocationsURL ?? undefined;

}

export async function commandMapBack(state: State): Promise<void>{
let URL = state.prevLocationsURL ?? undefined;
if (!URL) {
  URL = 

}
