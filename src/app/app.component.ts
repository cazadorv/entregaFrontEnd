import { Component,OnInit } from '@angular/core';
import { Cliente} from '../app/Clases/Cliente';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  arrayClientes: Array<Cliente>=[];

  constructor(private servicio:ListaClienteClaseService){}
  
  ngOnInit(){
    this.servicio.getClientes().then(data => {
      this.arrayClientes=data;
    });
  }
  guardar(model:Cliente){
    this.arrayClientes.push(model);
    console.log(this.arrayClientes);
  }
    /*listaCliente: Array<string>;
    constructor(){
        clientes=[];
    }

    ana dirDatos(cl:Cliente){
        this.clientes.push(datos);
        console.log('Se ha anadido los datos del cliente ' + this.listaCliente);
    }*/
}

