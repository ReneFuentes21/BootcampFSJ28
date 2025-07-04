type disposicion = "centro" | "derecha" | "izquierda";

export class Cabecera{
    titulo:string 
    color:string
    fuente:string
    disposicion:disposicion

    constructor(titulo:string, color:string, fuentes:string, disposicion:disposicion){
        this.titulo = titulo
        this.color = color
        this.fuente = fuentes
        this.disposicion = disposicion
    }

    getEstilo(){
        return `El color de fondo es ${this.color}, el titulo es ${this.titulo} y el tipo de fuentes es ${this.fuente}`
    }

    setDisposicion(nuevo_disposicion:disposicion){
        console.log(`Disposicion antes ${this.disposicion}`)
        this.disposicion = nuevo_disposicion;
        return `La disposicion nueva es ${nuevo_disposicion}`
    }

    getPropiedades(){
        return `El titulo es ${this.titulo} el color de fondo es ${this.color} el tipo de fuentes es ${this.fuente} y la disposicion es ${this.disposicion}`
    }


}