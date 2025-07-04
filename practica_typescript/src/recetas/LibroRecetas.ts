import { Receta } from "./receta";

export class LibroRecetas {
    private recetas: Receta[] = [];  

    agregarReceta(receta : Receta){
        this.recetas.push(receta);
    }

    listarReceta(){
        for(let receta = 0; receta<this.recetas.length; receta++)
            this.recetas[receta].preparar();
        }

    buscarPorDificultad(dificultad : string){
        for(let receta = 0; receta<this.recetas.length; receta++){
            if(this.recetas[receta].getDificultad() == dificultad){
                console.log(`Receta: ${this.recetas[receta].getNombre()} | Dificultad: ${this.recetas[receta].getDificultad()}`);
            }
        }
    }


}