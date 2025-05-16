let numeros = [2,120,4,5,8,2,-9,7,-10,60];

let positivos = numeros.filter((item)=> item > 0 );
console.log(`La cantidad de numeros positivos son de: ${positivos.length}`);

let negativos = numeros.filter((item) => item < 0);
console.log(`La cantidad de nuemros negativos son de: ${negativos.length}`);

let multiplos = numeros.filter((item) => item % 15 === 0);
console.log(`La cantidad de numeros multiplos de 15 son:  ${multiplos.length}`)

function sumArray(array){
    let total = 0
    for(let i = 0; i < array.length; i++){ 
        if(array[i] % 2 === 0){
            total += array[i] 
        }       
    }
    console.log(`La suma del arreglo es de ${total}`)
}
sumArray(numeros)
