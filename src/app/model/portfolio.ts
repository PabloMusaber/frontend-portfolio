export class Portfolio {
    id!: number;
    nombre!: string;
    titulo!: string;
    introduccion!: string;
    imagen!: File;
    footer!: string;

    constructor(nombre: string, titulo: string, introduccion: string, imagen: File, footer: string){
        this.nombre = nombre;
        this.titulo = titulo;
        this.introduccion = introduccion;
        this.imagen = imagen;
        this.footer = footer;
    }

}
