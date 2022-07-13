export class Experiencia {
    id_exp!:number;
    company_exp!: string;
    description_exp!: string;
    imagen!: File;

    constructor(company_exp: string, description_exp: string, imagen:File){
        this.company_exp = company_exp;
        this.description_exp = description_exp;
        this.imagen = imagen;
    }

}
