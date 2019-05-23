import { ListaClienteApiService } from './../../Services/listaClienteApi-service/listaClienteApi.service';
import { ListaClienteClaseService } from './../../Services/listasClientesClases-service/listaClientes-service';
import { Component} from '@angular/core';
import { Cliente } from '../../Clases/Cliente';

@Component({
  selector: 'formulario-Alta',
  templateUrl: './formulario.component.html',
})

export class FormularioClientesComponent {
  
  newCliente: Cliente = new Cliente(0,'','','');  
  new_cliente: any;

  constructor( private _servicio: ListaClienteApiService ) {
    this.new_cliente ={
      "id": 0,
      "nombre": "",
      "apellido": "",
      "direccion": ""
      }
  }

  //genero el nuevo id para el cliente
  //luego agrego al nuevo cliente se agrega al arreglo
  //onSubmit() {
  //  this.newCliente.id = this.servicio.generateId();
  //  this.servicio.addCliente(this.newCliente)
  //    .then(() => { this.clearForm(); })
  //    .catch((error => console.log(error)));
  //}

  clearForm() {
    this.new_cliente = {
      "id": 0,
      "nombre": "",
      "apellido": "",
      "direccion": ""
      }

    //this.newCliente = new Cliente( 0, '', '', '');
  }
    
}