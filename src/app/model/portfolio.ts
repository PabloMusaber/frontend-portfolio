export class Portfolio {
    id_portfolio!: number;
    name!: string;
    title!: string;
    introduction!: string;
    imagen!: File;
    footer!: string;

    constructor(name: string, title: string, introduction: string, imagen: File, footer: string){
        this.name = name;
        this.title = title;
        this.introduction = introduction;
        this.imagen = imagen;
        this.footer = footer;
    }

}
