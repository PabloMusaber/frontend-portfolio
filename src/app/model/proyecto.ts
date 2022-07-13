export class Proyecto {
    id_project!: number;
    title_project!: string;
    description_project!: string;
    github!: string;
    link!: string;
    imagen!: File;

    constructor(title_project: string, description_project: string, github: string, 
                link: string, imagen: File){
        this.title_project = title_project;
        this.description_project = description_project;
        this.github = github;
        this.link = link;
        this.imagen = imagen;
    }
}
