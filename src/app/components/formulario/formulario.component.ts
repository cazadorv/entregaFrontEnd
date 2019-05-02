import { Component, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../../Clases/Cliente';

@Component({
  selector: 'formulario-Alta',
  templateUrl: './formulario.component.html',
})

export class FormularioClientesComponent {

  model: Cliente = new Cliente('','','');  
  @Output() onsubmit = new EventEmitter<any>();

  public getDatos(){
    this.onsubmit.emit(this.model);
    console.log(this.model);
    this.model = new Cliente('','','');
  }
  
}