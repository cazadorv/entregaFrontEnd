import { Component,OnInit } from '@angular/core';

//Servicios
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'

//Clases
import { Cliente } from './Clases/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  arrayClientes: Array<Cliente> = [];

  constructor( private servicio:ListaClienteClaseService) {}

  ngOnInit(){
    this.servicio.getClientes()
      .then( clientes => this.arrayClientes = clientes)
      .catch( error => console.log(error));
  }
      
}