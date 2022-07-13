export class Educacion {
    id_edu!: number;
    anio_edu!: number;
    company_edu!: string;
    title_edu!: string;
    imagen!: File;

    constructor(anio_edu: number, company_edu: string, title_edu: string, imagen: File){
        this.anio_edu = anio_edu;
        this.company_edu = company_edu;
        this.title_edu = title_edu;
        this.imagen = imagen;
    }

}




