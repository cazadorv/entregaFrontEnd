import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Cliente} from '../../Clases/Cliente';

//para poder hacer put, post, delete, get

@Injectable()
export class ListaClienteApiService{

    private apiUrl='http://localhost:4200/';

    constructor(private http:HttpClient){}

    //devuelve el listado de todos los clientes, con un get
    getClientes():Observable<Cliente[]>{
        return this.http.get(this.obtenerRuta('')).pipe(
            map(response => {this.obtenerDatos}).call(this.error)); 
    }

    //metodo que permite hacer un post para dar de alta un producto
    addCliente(modelo:Cliente): Observable<Cliente>{
        return this.http.post(this.obtenerRuta(''),modelo).pipe(
            map(response => {this.obtenerDatos}).call(this.error));
    }

    //para manejar cualquier error que se produzca
    private error(error:any){
        let msg = (error.message) ? error.message : 'Error Desconocido';
        console.log(msg);
        return Observable.throw(msg);
    }

    private obtenerDatos(data:Response){
        let datos = data.json();
        console.log('getclientes -> '+datos);
        return datos || [];
    }

    private obtenerRuta(modelo:string){
        return this.apiUrl+modelo
    }
}