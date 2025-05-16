
function sumArray(array){
    //sumar todos los elementos del arreglo utilizando el for
    let total = 0
    for(let i = 0; i < array.length; i++){
        //console.log(array[i]);
        total += array[i] //total = array[i] + total
    }
    console.log(`La suma del arreglo es de ${total}`)
}

sumArray([22,31,40,51,65]);

/**En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
 - Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
 - Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 - Obtener cuantos alumnos reprobaron */

/*Metodos de arreglos */
let estudiantes = ["Valeria", "Diego","Iliana", "Angel", "Edwin", "Luis"];

estudiantes.forEach((estudiante)=> console.log(`Nombre del Estudiante ${estudiante}`))
console.log("Uso de map")
/**El primer parametro representa los elementos del arreglo
    *El segundo parametro representa cada posicion del arreglo

    */
estudiantes.map((students, index) => console.log(`Nombre del Estudiante ${students} + ${index}`))


let new_array = estudiantes.map((estudiantes) => {return `${estudiantes} `});
console.log(estudiantes)
console.log(new_array)

let personas = [
    { nombre: 'Isaac', edad: 16 },
    { nombre: 'Cristian', edad: 18 },
    { nombre: 'Edgar', edad: 15 },
    { nombre: 'Juan', edad: 30 },
    { nombre: 'Maria', edad: 25 },
    { nombre: 'Pedro', edad: 35 }
];

//for / while
personas.map((item) => {
    if(item.edad >= 20){
    console.log(`Persona: ${item.nombre} - Edad: ${item.edad}`)
    }
})

//filter => filtrar datos de un arreglo en base a una condicion.
console.log("Filter");
//console.log(personas.filter((item) => item.edad > 20))

let new_person = personas.filter((item) => item.edad > 20) ;
console.log(new_person);

//find => encontrar elementos.
console.log("find")
console.log(personas.find((item) => item.edad > 20));

//some ,every => ambos devuelven un booleano
console.log("SOME")//OR
//Este metodo te busca si al menos un elemento cumpla con la condicion
console.log(personas.some((item) => item.edad > 20));

//Every busca que todos los elementos cumplan con la condicion
console.log("EVERY")
console.log(personas.every((item) => item.edad > 20));

console.log("Index")
console.log(personas.findIndex((item) => item.edad > 20));

//hacer lo mismo pero con metodos de arreglos
/**En base al siguiente arreglo de notas [7,8,6.5,5,4,9,8.2]
 - Obtener cuantos alumnos aprobaron (para aprobar la nota debe ser mayor o igual a 7)
 - Obtener cuantos alumnos estan en recuperacion (deben tener una nota entre 5 y 6.9)
 - Obtener cuantos alumnos reprobaron */

let notas  = [
    {nombre :"Rene", nota: 7},
    {nombre :"David", nota: 8},
    {nombre :"Mauricio", nota: 6.5},
    {nombre :"Hector", nota: 5},
    {nombre :"Walter", nota: 4},
    {nombre :"Moises", nota: 9},
    {nombre :"Angel", nota: 8.2}
];
/** 
notas.map((item) =>{
    if(item.nota >= 7){
    console.log(`El estudiante ${item.nombre} tiene la nota de ${item.nota}`);
    }

})
*/

let aprobados = notas.filter((item)=> item.nota >= 7 )
let recuperacion = notas.filter((item) => item.nota >= 5 && item.nota < 6.9)
let reprobaron = notas.filter((item) => item.nota <=4 )

console.log(`Estudiantes aprobados ${aprobados.length}`)
console.log(`Estudiantes en recuperacion ${recuperacion.length}`)
console.log(`Estudiantes reprobados ${reprobaron.length}`)
