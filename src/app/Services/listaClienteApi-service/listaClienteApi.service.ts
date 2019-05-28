import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Cliente} from '../../Clases/Cliente';

//para poder hacer put, post, delete, get

@Injectable()
export class ListaClienteApiService{

    public apiUrl: string;

    constructor(private _http:HttpClient){
        this.apiUrl = "http://localhost:5000/";
    }

    //devuelve el listado de todos los clientes, con un get

    //ver xq no puedo declarar observable<Cliente>
    getClientes():Observable<any>{
        return this._http.get(this.obtenerRuta('cliente'))//.pipe(map(this.getDatos));
    }

    //agrego un nuevo cliente desde la url
    addClientes(nvocliente): Observable<any>{
        let datoJson = JSON.stringify(nvocliente);
        let nuevoHeaders = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.apiUrl + 'cliente', datoJson,{headers:nuevoHeaders});       
    }
    
    deleteCliente(id){

    }

    //para manejar cualquier error que se produzca
    public error(error:any){
        //se crea un mensaje, para devolver el error
        let msg = (error.message) ? error.message : 'Error Desconocido';
        console.log(msg);
        return Observable.throw(msg);
    }
    //con este metodo manejo los datos que me envia captura del http
    private getDatos(data:Response){
        let datos = data.json();
        console.log('getclientes -> '+ datos);
        return datos || [];
    }

    private obtenerRuta(modelo:string){
        return this.apiUrl+modelo
    }


}