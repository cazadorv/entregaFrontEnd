import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../Clases/Cliente';

@Component({
  selector: 'formulario-Alta',
  templateUrl: './formulario.component.html',
})

export class FormularioClientesComponent {
  
  model: Cliente = new Cliente(0,'','','');  
  
  @Output() onsubmit = new EventEmitter<any>();

  public vacio(){
    if (this.model.nombre == '' || this.model.apellido == '' || this.model.direccion == '' ){
      return true
    }
  }
  public getDatos(){
    
    if( !this.vacio()){
        this.onsubmit.emit(this.model);
        this.model = new Cliente(0,'','','');        
    }else{
      console.log('algo anda mal')
    }
  }
  
}