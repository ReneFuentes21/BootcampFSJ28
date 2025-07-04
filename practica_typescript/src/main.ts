
import { LibroRecetas } from './recetas/LibroRecetas.ts';
import { Receta } from './recetas/receta.ts'
import { RecetaDulce } from './recetas/receta_ducle.ts'
import { RecetaSalada } from './recetas/receta_salada.ts'

let recetario = new LibroRecetas();
let flan = new RecetaDulce("Flan", ["Huevos, Azucar, Leche, Vainilla"], 50, "Medio", "Dulce");
let carneAsada = new RecetaSalada("Carne", ["Carne de Res, Especias, Tortillas"], 60, "facil", "Salado")

console.log(flan);
console.log(carneAsada);

flan.preparar();
carneAsada.preparar();

recetario.agregarReceta(flan);
recetario.agregarReceta(carneAsada);

recetario.listarReceta();
recetario.buscarPorDificultad("facil")  