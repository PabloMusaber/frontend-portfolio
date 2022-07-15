export class Educacion {
    id!: number;
    anio!: number;
    institucion!: string;
    titulo!: string;
    imagen!: File;

    constructor(anio: number, institucion: string, titulo: string, imagen: File){
        this.anio = anio;
        this.institucion = institucion;
        this.titulo = titulo;
        this.imagen = imagen;
    }

}




