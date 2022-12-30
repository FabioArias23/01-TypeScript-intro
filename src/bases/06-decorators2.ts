const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon{
    constructor(
        public readonly id:number,
        public name:string,
    ){}
    scream(){
        console.log(`${this.name.toUpperCase()}!!`)
    }
    @Deprecated('Most use speak2 method instead / es decir tiene que usar el metodo de speak2')
   speak(){
        console.log(`${this.name}, ${this.name}!`)
    }
    speak2(){
        console.log(`${this.name}, ${this.name}!`)
    }
}
export const charmander  =new Pokemon(4,"charmander");

charmander.speak()
/*
En la definición del método, se puede marcar como obsoleto 
(deprecated) con la justificación. Esto ayudará a que otros developers sepán que deben de 
utilizar ya la alternativa.

@Deprecated('Most use speak2 method instead')
 speak() {
      console.log(`${ this.name }, ${ this.name }!`)
 }

*/