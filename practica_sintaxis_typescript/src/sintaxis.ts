//declara variables

export let name = "FazbearJones";
export let isStudent = false;

//asigando tipo de datos

let lastname:string = "Fuentes Benitez";
let num1:number = 10.52;
let isCoach:boolean = true;
let data:null = null;
let data2:undefined;

const PI:number = 3.1416;



//arreglos y 
//uso de arreglos
export let list_person:string[] = ["marvin","valeria","katherine","angel","erick"];
export let list:any =[true, 23.4, "hola"];

//colocando el tipo de datos para cada elemento de mi arreglo
export let list2:Array<string> = [];
//con esta forma limitamos la longitud del arreglo (Tuplas) => son arreglos que ya se define la longitud del mismo
export let list3:[number, number, string] =[2.5,100,"datos"];

//uso de objeto

export let person:object = {
    name: "Rene Ismael",
    lastname: "Fuentes Benitez",
    age: 22,
    isEmployee: true
};

//mencionamos que elementos son opcionales con el signo "?"
export let student:{name:string, carnet:string, age:number, isActive:boolean, address?:string} = {
    name: "Tony Stark",
    carnet: "233221",
    age: 21,
    isActive: true
};

//types => son elementos personalizados (definen una estructura o valores)
//usuarios => tienen que cumplir con una estructura de datos
//definiendo valores estaticos
type Rol = "admin" | "employee";

//definiendo una estructura especifica para los objetos
type User = {
    name:string,
    email:string,
    isActive:boolean,
    password?:string,
    rol:Rol
};

//crear los usuarios que respenten el type
export let silensent:User = {
    name: "Rene",
    email: "rene@gmail.com",
    isActive: true,
    rol: "admin"
};

export let jennifer:User = {
    name: "jennifer",
    email: "jennifer@gmail.com",
    isActive: true,
    password: "12345",
    rol:"employee"
};