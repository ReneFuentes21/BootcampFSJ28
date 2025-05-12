
console.log('Hola Mundo');


//Declaramos variable

let fullname = "Rene Fuentes";
var age = 22;
const country = "El Salvador";

console.log(fullname);
//funcion declarativa
function sendMessage(){
    console.log(fullname);
    let message = "Hola";
    console.log(message);
};

let mayor_edad = true;
let dato = null;

sendMessage();

function sumar(){
    let result = 10 + 20;
    return result;
};
sumar();

//funcion de flecha
const multiplicar = () => {
    let result = 50 * 20;
    return result;
};

multiplicar();

//funciones con parametros y argumentos
//parametros => se definen dentro de la funcion
function restar(a,b){
    let result = a - b;
    return result;
};

restar();



//objeto y arreglo 

let gato = {
    name: "Chonito",
    age: 2,
    color: "naranja",
    listComidas: ["Pollo","Carne","Comida de Gato"]//arreglo
};

let array_fruta = ["manzana", "pera", "naranja","mora"];
//arreglo indexadp
console.log("Al gato le gusta " + gato.listComidas[2]);