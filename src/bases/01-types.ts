export let name:string = 'Fabio';
export const age:number = 25
export const isValid: boolean = true

name = "Adrian"

export const templateString = ` esto es un string
multilinea
que puede tener comilla dobles"" 
'' apostrophe o simple
inyectar valores \$hola ${name} o 
expresiones ${1+1}
numeros: ${age}
booleanos: ${isValid}`
console.log(templateString)