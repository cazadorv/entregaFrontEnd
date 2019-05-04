import { Component,OnInit } from '@angular/core';
import { Cliente} from '../app/Clases/Cliente';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'
//import { ListaClienteApiService} from './Services/listaClienteApi-service/listaClienteApi.service'

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
}

