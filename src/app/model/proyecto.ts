export class Proyecto {
    id!: number;
    nombre!: string;
    descripcion!: string;
    github!: string;
    link!: string;
    imagen!: File;

    constructor(nombre: string, descripcion: string, github: string, 
                link: string, imagen: File){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.github = github;
        this.link = link;
        this.imagen = imagen;
    }
}
