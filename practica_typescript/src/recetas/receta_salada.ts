import { Receta } from './receta';
type sabor = "Salado" | "Dulce";

export class RecetaSalada extends Receta{
    
    constructor(nombre:string, ingredientes:string[], tiempoPreparacion:number,dificultad:string, tipo:sabor){
        super(nombre, ingredientes, tiempoPreparacion, dificultad, tipo)
    }

    preparar(){
        console.log(`Vamos a preparar ${this.getNombre()}.
        Necesitarás los siguientes ingredientes: ${this.getIngredientes()}.
        Tardarás unos ${this.getTiempoPreparacion()} minutos.
        La dificultad de esta receta es: ${this.getDificultad()}.
        Es una receta de tipo ${this.getTipo()}.`);
    };
}