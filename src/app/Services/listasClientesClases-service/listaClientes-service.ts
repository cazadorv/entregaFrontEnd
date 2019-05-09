import {Injectable} from '@angular/core';
import {Cliente} from '../../Clases/Cliente';

const CLIENTES = [
    { id: 0, nombre: 'Santiago', apellido: 'Garcia', direccion: 'Salta 49' },
    { id: 1, nombre: 'Hernan', apellido: 'Cataneo', direccion: 'Moreno 1196' },
    { id: 2, nombre: 'Juan', apellido: 'Roman', direccion: 'Las Heras 234' },
    { id: 3, nombre: 'Carolina', apellido: 'Chichona', direccion: 'Cordoba 2899' },
    { id: 4, nombre: 'Gaston', apellido: 'Sosa', direccion: 'Av Alem 8767' }
  ];

@Injectable()
export class ListaClienteClaseService{
    
    //retorna la lista de clientes    
    getClientes(){
        return new Promise<Cliente[]>
            (data =>{            
                data(CLIENTES);            
            });
    }
    
    // genera una id nueva para un nuevo cliente
    generateId() {
        const ids = CLIENTES.map(c => c.id);
        let max = Math.max(...ids);
        max++;
        return max;
    }

    //agrega un nuevo cliente a la lista
    addCliente(cl: Cliente){
    return new Promise( (resolve, reject) => {
            CLIENTES.push(cl);
            resolve(CLIENTES);
        });
    }

    //elimina un cliente de la lista
    deleteCliente(id:number){
        return new Promise( (resolve, reject) => {
        const index = CLIENTES.findIndex(c => c.id === id)
            if (index>=0){
                CLIENTES.splice(index,1);
                resolve(CLIENTES);
            }else {
                reject();
            }
        });
    }
}