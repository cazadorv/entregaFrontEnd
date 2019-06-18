import {Component,Input} from '@angular/core';
//Clase
import { Cliente} from '../../Clases/Cliente';
//servicio
import { ListaClienteApiService } from '../../Services/listaClienteApi-service/listaClienteApi.serviceOBSERVABLES';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoClientesComponent {

    @Input() listadoClientes:Cliente[];
    
    constructor( private _servicioLista: ListaClienteApiService){}

    ngOnInit(){
      this._servicioLista.getClientes().subscribe(
        result =>{
           this.listadoClientes = result;
         },
         error =>{
           this._servicioLista.error(error);
         }
       );
    }

    deleteCliente(id: number) {
        if (confirm("Desea eliminar este cliente??")){        
        this._servicioLista.deleteCliente(id)
          //.then(() => console.log('Cliente eliminado'))
          //.catch( error => console.log(error));
        }
      }
}