import axios from "axios";

//cualquier  clase que implemente este http adapter tiene que tener el metodo get
//se que debe tener el url que va a ser tipo string. Es para ponerme a mi mismo mis reglas. 
//para que otras personas sepan como funcionan mis clases
export interface HttpAdapter {
    get<T>(url:string):Promise<T>;

}


export class PokeApiFetchAdapter implements HttpAdapter{
    async get<T>(url:string):Promise<T>{
        const resp = await fetch(url);
        const data:T = await resp.json();
        console.log('con fetch')
        return data;
    }
}



export class PokeApiAdapter implements HttpAdapter{

    private readonly axios =  axios;
    async get<T>(url:string ){
        //peticion get
        const {data}  = await this.axios.get<T>(url)
        console.log('con axios')
        return data;
    }
    async post (url:string, data:any){

    }
    async patch (url:string, data:any){

    }
    async delete (url:string ){

    }
    
}