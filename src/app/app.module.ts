import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { FormularioClientesComponent} from './components/formulario/formulario.component'
import { ListadoClientesComponent } from './components/listado/listado.component';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'
import { ListaClienteApiService} from './Services/listaClienteApi-service/listaClienteApi.service'

@NgModule({
  declarations: [
    AppComponent,
    FormularioClientesComponent,
    ListadoClientesComponent    
  ],
  imports: [
    BrowserModule,FormsModule
, HttpClientModule  ],
  providers: [
    ListaClienteClaseService,
    ListaClienteApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
