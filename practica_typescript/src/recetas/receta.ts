export type sabor = "Salado" | "Dulce";

export abstract class Receta{
    protected nombre:string;
    protected ingredientes: string[];
    protected tiempoPreparacion: number;
    protected dificultad: string;
    protected tipo : sabor;

    constructor(nombre:string, ingredientes:string[], tiempoPreparacion:number,dificultad:string, tipo:sabor){
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.tiempoPreparacion = tiempoPreparacion;
        this.dificultad = dificultad;
        this.tipo = tipo;
    }

    preparar(){
        
    }
    
    // Getter y Setter para 'nombre'
    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    // Getter y Setter para 'ingredientes'
    public getIngredientes(): string[] {
        return this.ingredientes;
    }

    public setIngredientes(ingredientes: string[]): void {
        this.ingredientes = ingredientes;
    }

    // Getter y Setter para 'tiempoPreparacion'
    public getTiempoPreparacion(): number {
        return this.tiempoPreparacion;
    }

    public setTiempoPreparacion(tiempo: number): void {
        this.tiempoPreparacion = tiempo;
    }

    // Getter y Setter para 'dificultad'
    public getDificultad(): string {
        return this.dificultad;
    }

    public setDificultad(dificultad: string): void {
        this.dificultad = dificultad;
    }

    // Getter y Setter para 'tipo'
    public getTipo(): sabor {
        return this.tipo;
    }

    public setTipo(tipo: sabor): void {
        this.tipo = tipo;
    }
}