import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Cliente} from '../../Clases/Cliente';

@Injectable()
export class ListaClienteApiService{
    private apiUrl='http://localhost:4200/';

    constructor(private http:HttpClient){}//para poder hacer put, post, delete, get
}