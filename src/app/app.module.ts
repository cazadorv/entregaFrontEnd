import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { FormularioClientesComponent} from './components/formulario/formulario.component'
import { ListadoClientesComponent } from './components/listado/listado.component';
import { ListaClienteClaseService } from './Services/listasClientesClases-service/listaClientes-service'
import { ListaClienteApiService} from './Services/listaClienteApi-service/listaClienteApi.service';
import { HomeComponent } from './components/home/home.component'
import { routing, appRoutingProviders } from './routes/app.routing';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioClientesComponent,
    ListadoClientesComponent,
    HomeComponent,
    NotFoundComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpClientModule,
   routing  ],
  providers: [
    ListaClienteClaseService,
    ListaClienteApiService,
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
