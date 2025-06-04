//creacion de clase (plantilla) -> crear personajes de la liga de la justifica

class Personaje {
    //atributos
    poderes:string[] 
    nombre:string
    emblema:string
    nacionalidad:string
    genero:string
    debilidad:string[]
    volar:boolean

/*
    constructor(){
        this.nombre = "Flash"
        this.volar = false
        this.nacionalidad = "Canadiense"
    }
*/
    //this => es la forma de acceder a los atributos y a los metodos de la clase
    //constructor parametrizado
    constructor(nombre:string, genero:string, nacionalidad:string, volar:boolean){
        this.nombre = nombre
        this.genero = genero
        this.nacionalidad = nacionalidad
        this.volar = volar
        this.debilidad = []
        this.poderes = []
        this.emblema =""
    }
    atacar(){
        return `Los personajes atacan`
    }

    obtenerPoderes(){
        //traer y mostrar los poderes del personaje
    }

    obtenerDebilidades(){
        return `Los personajes son debiles a: `
    }

}

//crear objeto
//instanciar clases => crear objetos de la clase.
let batman = new Personaje("Batman","Masculino","Estadounidense",false);
batman.atacar();

let personaje2 = new Personaje("Mujer Maravilla", "Femenino","Amazonica", true);


let personaje3 = new Personaje("Superman", "Maasculino", "Metropolis", true);


let personaje4 = new Personaje("Freddy Fazbear", "masculino", "Fazbear", true);


