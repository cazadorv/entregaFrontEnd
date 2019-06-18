import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/operators';
import { Cliente} from '../../Clases/Cliente';
import { resolve } from 'url';

//para poder hacer put, post, delete, get

@Injectable()
export class ListaClienteApiService{
 
    public apiUrl: string;

    constructor(private _http:HttpClient){
        this.apiUrl = "https://localhost:5001/";
    }

    //devuelve el listado de todos los clientes, con un get
    /*ahora el get funciona con una promesa*/
    getClientes():Promise<Cliente[]> {
        return new Promise(
            (resolve,reject)=>{
                this._http.get(this.obtenerRuta('cliente'))
                .toPromise()
                .then(
                    resolve =>{
                        console.log(resolve);                        
                    },
                    reject =>{
                        //error
                        console.log(reject + " error de algun tipo ")
                    }
                )
            }
        );
        
                //return 
    }

    //agrego un nuevo cliente desde la url
    addClientes(nvocliente):Promise<Cliente>{
        let datoJson = JSON.stringify(nvocliente);
        let nuevoHeaders = new HttpHeaders().set('Content-Type','application/json');
        return new Promise(
            (res,rej)=>{
                this._http.post(this.apiUrl + 'cliente/nuevo', datoJson,{headers:nuevoHeaders})                
            });
    }

    //para manejar cualquier error que se produzca
    public error(error:any){
        //se crea un mensaje, para devolver el error
        let msg = (error.message) ? error.message : 'Error Desconocido';
        console.log(msg);
        return msg;
    }

    private obtenerRuta(modelo:string){
        return this.apiUrl+modelo
    }


}