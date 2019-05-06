import {Injectable} from '@angular/core';
import {Cliente} from '../../Clases/Cliente';
import { promise } from 'protractor';

const CLIENTES: Array<Cliente> = [
    new Cliente(0,'Carlos','Garcia','Salta 49'),
    new Cliente(1,'Alejandro','Bautis','roman mejia 45'),
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

    deleteCliente(id?:number,cl?:Cliente){
        const index = CLIENTES.findIndex(
            c => c.id === id)
        if (index>1){
            CLIENTES.splice(index,1);
        }
    }
    getbyId(id:number){
        return new Promise<Cliente[]>
        ((resolve,reject) =>{
            const c=CLIENTES.find(
                x=> x.id === id
            )
            if (c){
                console.log(c);
                resolve(null)

            }else{resolve(null)}            
        });
    }
}