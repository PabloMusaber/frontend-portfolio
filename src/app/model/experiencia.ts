export class Experiencia {
    id!:number;
    empresa!: string;
    descripcion!: string;
    imagen!: File;

    constructor(empresa: string, descripcion: string, imagen:File){
        this.empresa = empresa;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }

}
