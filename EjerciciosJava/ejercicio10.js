let morning =[22,19,20,23,21];
let afternoon = [10,15,11,12,13,14];
let night = [30,25,26,31,45,23,33,27,29,28,32];

function promedio(array) {
    if (array.length === 0) {
    return 0; 
    }
    let suma = 0;
        for (let i = 0; i < array.length; i++) {
            suma += array[i];
        }
    return suma / array.length;
}

let promedioMorning = promedio(morning);
console.log(`El promedio del turno de la mañana es de ${promedioMorning}`);

let promedioAfter = promedio(afternoon)
console.log(`El promedio del turno de la tarde es de ${promedioAfter}`);

let promedioNigth = promedio(night)
console.log(`El promedio del turno de la noche es de ${promedioNigth}`);

function promedioAlto(){
    if (promedioNigth > promedioAfter){
        console.log(`El promedio con mas edad es el Turno de la Noche`)
    } else if (promedioNigth < promedioMorning){
        console.log(`El promedio con mas edad es el Turno de la Mañana`)
    } else{
        console.log(`El promedio con mas edad es el Turno de la Tarde`)
    }
}
promedioAlto()