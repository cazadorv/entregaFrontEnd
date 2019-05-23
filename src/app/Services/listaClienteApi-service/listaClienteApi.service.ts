import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Cliente} from '../../Clases/Cliente';

//para poder hacer put, post, delete, get

@Injectable()
export class ListaClienteApiService{

    public apiUrl: string;

    constructor(public _http:HttpClient){
        this.apiUrl = "https://reqres.in/";
    }

    //devuelve el listado de todos los clientes, con un get
    getClientes():Observable<any>{
        return this._http.get("https://localhost:5001/prueba");
    }

    addCliente(user): Observable<any>{
        let datoJson = JSON.stringify(user);
        let nuevoHeaders = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.apiUrl + 'api/users', datoJson,{headers:nuevoHeaders});       
    }

    //metodo que permite hacer un post para dar de alta un producto
    //addCliente(modelo:Cliente): Observable<Cliente>{
    //    return this._http.post(this.obtenerRuta(''),modelo).pipe(
    //        map(response => {this.obtenerDatos}).call(this.error));
    //}

    //para manejar cualquier error que se produzca
    public error(error:any){
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