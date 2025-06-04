import { AcademiaKodigo } from "./kodigo"

type tipoEstudiante = "becado" | "no becado"
type bootcampKodigo = "Full Stack Jr." | "JavaDeveloper" | "Data Analyst Jr"
export class Estudiante extends AcademiaKodigo{

    private tipo_financiamiento:tipoEstudiante
    private estado:string
    protected carnet:string
    protected bootcamp:bootcampKodigo

//colocar el modificador de acceso en cada atributo (privados, protegidos, publicos )
    //heredar constructor de la clase padre
    constructor(nombre:string, edad:number, nacionalidad:string,email:string, tipo:tipoEstudiante,
        bootcamp:bootcampKodigo, estado:string){
            //super => Estoy heredando el constructor de la clase padre
            super(nombre, edad, nacionalidad, email)
            //atributos exclusivos de la clase 
            this.tipo_financiamiento = tipo
            this.carnet = "Kodigo2025"
            this.estado = estado
            this.bootcamp = bootcamp
    }

    mostrarDetalles(){
        return `Estudiante: ${this.nombre} tiene : ${this.edad} 
                años es de nacionalidad: ${this.nacionalidad}
                es ${this.tipo_financiamiento} 
                y estudia en el bootcamp ${this.bootcamp} con el carnet ${this.carnet}`
    }

    crearCarnet(){
        //codigo
    }

    entregarTareas(){
        //codigo
    }

    //getter (obtine info / devuelve), //setter (actualizar un valor al atributo)
/**     
 *  get get getEstado(){
        return this.estado
    }

    set setEstado(nuevo_estado:string){
        this.estado = nuevo_estado
    }
*/
    getEstado(){
        return this.estado
    }

    setEstado(nuevo_estado:string){
        this.estado = nuevo_estado
    }

    getTipoFinanciamiento(){
        return this.tipo_financiamiento
    }
}