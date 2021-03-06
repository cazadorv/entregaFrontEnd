import { Component,OnInit } from '@angular/core';

//Servicios
//import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'
import { ListaClienteApiService } from './Services/listaClienteApi-service/listaClienteApi.serviceOBSERVABLES';

//Clases
import { Cliente } from './Clases/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {

  listadoClientes: Array<Cliente>=[];
  
  constructor ( private _servicioLista: ListaClienteApiService ){}

  ngOnInit(){
    this._servicioLista.getClientes()
    .toPromise()
    .then(
     result =>{
        this.listadoClientes = result;
      })
    .catch(
      error =>{
        this._servicioLista.error(error);
      }
    );
  }
  
   guardar(modelo: Cliente){
    this._servicioLista.addClientes(modelo).subscribe(
      data =>{
        this.listadoClientes.push(data);
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