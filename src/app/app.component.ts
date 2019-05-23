import { Component,OnInit } from '@angular/core';

//Servicios
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'
import { ListaClienteApiService } from './Services/listaClienteApi-service/listaClienteApi.service';

//Clases
import { Cliente } from './Clases/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers:[ListaClienteApiService]
})

export class AppComponent implements OnInit {

  //arrayClientes: Array<Cliente> = [];
  public usuario: any;
  constructor ( private _servicioLista: ListaClienteApiService ){}

  ngOnInit(){
    this._servicioLista.getClientes().subscribe(
      result =>{
        this.usuario = result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  //este constructor usa el servicio para funcionar con el array
  //constructor( private servicio:ListaClienteClaseService) {}
  //aqui tambien utilizamos en el init para usar el array
  //ngOnInit(){
  //  this.servicio.getClientes()
  //    .then( clientes => this.arrayClientes = clientes)
  //    .catch( error => console.log(error));
}