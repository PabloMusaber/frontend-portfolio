export class Experiencia {
    id!:number;
    empresa!: string;
    descripcion!: string;
    imagen!: string;

    constructor(empresa: string, descripcion: string, imagen:string){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}
