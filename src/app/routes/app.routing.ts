import { ListadoClientesComponent } from './../components/listado/listado.component';
//importamos modulos de rutas de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importo componentes
import { HomeComponent } from '../components/home/home.component';
import { FormularioClientesComponent } from "../components/formulario/formulario.component";
import { NotFoundComponent } from '../components/not-found/not-found.component';



//creo array de rutas
const appRoutes: Routes = 
[
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'formulario', component: FormularioClientesComponent},
    {path:'listado', component: ListadoClientesComponent},
    {path: '**', component: NotFoundComponent }
];

//exporto el modulo de rutas
export const appRoutingProviders: any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);