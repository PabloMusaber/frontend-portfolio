export class Habilidad {
    id_skill!:number;
    name_skill!: string;
    percent!: number;

    constructor(name_skill: string, percent: number){
        this.name_skill = name_skill;
        this.percent = percent;
    }
    
}
