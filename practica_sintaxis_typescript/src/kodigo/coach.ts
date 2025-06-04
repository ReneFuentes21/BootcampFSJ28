import { AcademiaKodigo } from "./kodigo";

type tiempo_parcial= "Por Hora" | "Full Time";

export class Coach extends AcademiaKodigo{
    protected bootcamps:string[]
    protected horario:tiempo_parcial
    protected carnet:string
    protected lenguajes_programacion:string[]

    constructor(nombre:string, edad:number, nacionalidad:string, email:string, horario:tiempo_parcial, bootcamp:string[], lenguajes:string[]){        
        super(nombre, edad, nacionalidad, email)
        this.lenguajes_programacion = lenguajes
        this.carnet = "KodigoCoach2025"
        this.horario = horario
        this.bootcamps = bootcamp

    }

    mostrarDetalles(){
        return  `Coach: ${this.nombre}
                Horario: ${this.horario}
                carnet: ${this.carnet}
                Bootcamps: ${this.bootcamps}
                Lenguajes que domina ${this.lenguajes_programacion}`
    }



}
/**
export let docente = new Coach ("Kenia Paz", 21, "Salvadoreña", "kenia@gmail.com", "Full Time", 
    "[JavaDeveloper, FullStackJr, Data Analytics]", 
    "[JavaScript, PHP, CSS]") */