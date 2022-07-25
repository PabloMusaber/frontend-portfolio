export class Educacion {
    id!: number;
    anio!: string;
    institucion!: string;
    titulo!: string;
    imagen!: string;

    constructor(anio: string, institucion: string, titulo: string, imagen: string){
        this.anio = anio;
        this.institucion = institucion;
        this.titulo = titulo;
        this.imagen = imagen;
    }

}




