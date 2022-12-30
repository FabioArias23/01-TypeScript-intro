import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interfaces';
export class Pokemon{
    get imageUrl():string{
    return `https://pokemon.com/${this.id}.jpg`;       
    }
  constructor (
    public readonly id:number,
    public name: string,
   // public imageUrl:string,
  ){}

  scream(){
    console.log(`${this.name.toLocaleUpperCase()}!!!`);
  }
  speak(){
    console.log(`${this.name}, ${this.name}`);
  }
async getMoves ():Promise<Move[]>{
    const {data}  = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
  console.log(data.moves)
  return data.moves
}

}
export const charmander = new Pokemon(4,'Charmander',`http://pokemon.com/4`)
//console.log(charmander.imageUrl) 

//charmander.scream();
//charmander.speak();

//console.log(charmander.getMoves());
charmander.getMoves()