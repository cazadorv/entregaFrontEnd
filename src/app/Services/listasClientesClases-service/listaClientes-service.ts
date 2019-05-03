import {Injectable} from '@angular/core';
import {Cliente} from '../../Clases/Cliente';

const CLIENTES: Array<Cliente> = [
    new Cliente('Carlos','Garcia','Salta 49'),
];

@Injectable()
export class ListaClienteClaseService{
    getClientes(){
        return new Promise<Cliente[]>
            (data =>{            
                data(CLIENTES);            
            });
    }

    addCliente(cl:Cliente){ 
        CLIENTES.push(cl);
        console.log("cliServ array --> "+ CLIENTES);
    }

    deleteCliente(){
        return CLIENTES.pop();
    }
}