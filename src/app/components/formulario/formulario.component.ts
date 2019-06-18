import { Component} from '@angular/core';

import { ListaClienteApiService } from '../../Services/listaClienteApi-service/listaClienteApi.serviceOBSERVABLES';

import { Cliente } from '../../Clases/Cliente';

@Component({
  selector: 'formulario-Alta',
  templateUrl: './formulario.component.html',
})

export class FormularioClientesComponent {
  
  newCliente: Cliente = new Cliente(0,'','','');  
  new_cliente: any;
  usuarioLleno: any;

  constructor( private _servicio: ListaClienteApiService ) {
      this.new_cliente ={
      "id": 0,
      "nombre": "",
      "apellido": "",
      "direccion": ""
      }
  }

  onSubmit(form){
    this._servicio.addClientes(this.new_cliente).subscribe(
      response=>{        
        this.usuarioLleno=response
        console.log("en el submit - > "+ this.usuarioLleno);
        form.reset()
        //return response
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  clearForm() {
    this.new_cliente = {
      "id": 0,
      "nombre": "",
      "apellido": "",
      "direccion": ""
      }
  }
    
}