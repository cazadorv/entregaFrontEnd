//esta clase se utilizara para guardar los datos de los clientes ingresados
export class Cliente {
        nombre:string;
        apellido:string;
        direccion:string;

    constructor(nom:string,ape:string,dir:string){
        this.nombre=nom;
        this.apellido=ape;
        this.direccion=dir
    }
}