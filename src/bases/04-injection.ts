
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interfaces';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon{
    get imageUrl():string{
    return `https://pokemon.com/${this.id}.jpg`;       
    }
  constructor (
    public readonly id:number,
    public name: string,
   /** Todo: Inyectar dependencias */
   private readonly http: HttpAdapter
  ){}

  scream(){
    console.log(`${this.name.toLocaleUpperCase()}!!!`);
  }
  speak(){
    console.log(`${this.name}, ${this.name}`);
  }
  async getMoves (){
    const data  = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
  console.log(data.moves)
  return data.moves
}
}
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();
export const charmander = new Pokemon(4,'Charmander',pokeApiAxios)
//console.log(charmander.imageUrl) 

//charmander.scream();
//charmander.speak();

//console.log(charmander.getMoves());
charmander.getMoves()