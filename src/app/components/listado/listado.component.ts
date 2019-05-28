import {Component,Input} from '@angular/core';
//Clase
import { Cliente} from '../../Clases/Cliente';
//servicio
//import { ListaClienteClaseService } from './../../Services/listasClientesClases-service/listaClientes-service';
import { ListaClienteApiService } from './../../Services/listaClienteApi-service/listaClienteApi.service';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoClientesComponent {

    @Input() arrayClientes:Cliente[];
    
    constructor( private _servicioLista: ListaClienteApiService){}

    ngOnInit(){
      this._servicioLista.getClientes().subscribe(
        result =>{
           this.arrayClientes = result.data;
           console.log('y el reslutado es ' + result.data)
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