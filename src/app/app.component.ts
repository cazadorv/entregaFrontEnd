import { Component,OnInit } from '@angular/core';
import { Cliente} from '../app/Clases/Cliente';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  clientes: Array<Cliente>=[];

  constructor(private servicio:ListaClienteClaseService){}
  
  ngOnInit(){
    this.servicio.getClientes().then(data => {
      this.clientes = data;
    });
  }
  guardar(model:Cliente){
    this.clientes.push(model);
  }
  
    
    /*listaCliente: Array<string>;
    constructor(){
        clientes=[];
    }

    anadirDatos(cl:Cliente){
        this.clientes.push(datos);
        console.log('Se ha anadido los datos del cliente ' + this.listaCliente);
    }*/
}

