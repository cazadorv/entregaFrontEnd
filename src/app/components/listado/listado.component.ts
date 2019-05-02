import {Component,Input} from '@angular/core';
import { Cliente} from '../../Clases/Cliente';

@Component({
    selector: 'listado',
    templateUrl: './listado.component.html'
})

export class ListadoClientesComponent {
    @Input() clientes:Array<Cliente>;
    
    displayCliente(clientes: Cliente){
        console.log(clientes);
    }
}