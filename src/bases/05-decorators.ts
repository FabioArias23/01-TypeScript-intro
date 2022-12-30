class newPokemon {
    constructor(
        public readonly id:number,
        public name:string,
    ){}
    scream(){
        console.log(`no quiero!!`)
    }
   speak(){
        console.log(`No quiero hablarr!`)
    }
 }

 /////////////////////////////////////////

 /* el decorador no es mas que una funcion
  que tiene acceso a la definicion de la clase en este caso
  pero puede tener acceso a la definicion del metodo  o a la definicion de la propiedad
  etc.*/
const  MyDecorator = () =>{
    return (target: Function) =>{
        //console.log(target)
        return newPokemon
    }
}

@MyDecorator()
///////////////////////////////////////////
export class Pokemon{
    constructor(
        public readonly id:number,
        public name:string,
    ){}
    scream(){
        console.log(`${this.name.toUpperCase()}!!`)
    }
   speak(){
        console.log(`${this.name}, ${this.name}!`)
    }
}
export const charmander  =new Pokemon(4,"charmander");
charmander.scream()
charmander.speak()