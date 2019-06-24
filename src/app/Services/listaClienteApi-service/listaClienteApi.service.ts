import { Cliente } from './../../Clases/Cliente';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/operators';

@Injectable()
export class ListaClienteApiService{
 
    public apiUrl: "https://localhost:5001/cliente";

    constructor(private _http:HttpClient){}

    //devuelve el listado de todos los clientes
    getClientes():Promise<Cliente[]> {
        return new Promise(_=>{
                this._http.get(`${this.apiUrl}`)
                .toPromise()        
            }
        );
    }

    //devuelve un cliente desde su ID
    getCliente(id:number):Promise<Cliente[]> {
        return new Promise(_=>{
                this._http.get(`${this.apiUrl}/buscar/${id}`)
                .toPromise()        
            }
        );
    }

    //agrego un nuevo cliente a la lista
    addClientes(nvocliente:Cliente):Promise<Cliente>{
        return new Promise(_=>{
            this._http.post(`${this.apiUrl}/nuevo`, nvocliente)
            .toPromise()        
        }
    );
    }

    //elimino un cliente a la lista
    deleteCliente(id:number):Promise<Cliente[]> {
        return new Promise(_=>{
                this._http.delete(`${this.apiUrl}/eliminar/${id}`)
                .toPromise()        
            }
        );
    }

    //actuzalizo un cliente de la lista
    updateCliente(id:number, nvosDatos:Cliente):Promise<Cliente[]> {
        return new Promise(_=>{
                this._http.put(`${this.apiUrl}/actualizar/${id}`,nvosDatos)
                .toPromise()        
            }
        );
    }
}