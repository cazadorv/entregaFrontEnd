//esta clase se utilizara para guardar los datos de los clientes ingresados
export class Cliente {
        id:number;
        nombre:string;
        apellido:string;
        direccion:string;

    constructor(id:number,nom:string,ape:string,dir:string){
        this.id=id;
        this.nombre=nom;
        this.apellido=ape;
        this.direccion=dir
    }
}