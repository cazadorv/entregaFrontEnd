import {Component,Input} from '@angular/core';
//Clase
import { Cliente} from '../../Clases/Cliente';
//servicio
import { ListaClienteClaseService } from './../../Services/listasClientesClases-service/listaClientes-service';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoClientesComponent {

    @Input() clientes:Cliente[];
    
    constructor( private servicio: ListaClienteClaseService){}

    deleteCliente(id: number) {
        if (confirm("Desea eliminar este cliente??")){        
        this.servicio.deleteCliente(id)
          .then(() => console.log('Cliente eliminado'))
          .catch( error => console.log(error));
        }
      }
}