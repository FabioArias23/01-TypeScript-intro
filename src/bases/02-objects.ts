export const pokemonIds = [1,20,30,34,66];

export const bulbasaur:Pokemon= {
    id: 1,
    name: 'bulbasur',
    
}
interface Pokemon{
    id: number;
    name: string;
    age?: number;
}
export const charmander:Pokemon={
    id: 0,
    name: "Charmander"
}
export const pokemons:Pokemon[] = []
pokemons.push(charmander,bulbasaur);

console.log(pokemons)