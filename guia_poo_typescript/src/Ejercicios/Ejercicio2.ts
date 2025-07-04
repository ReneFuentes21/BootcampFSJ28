export class Calculadora {
    num1:number
    num2:number

    constructor(numero1:number, numero2:number){
        this.num1 = numero1
        this.num2 = numero2
    }

    sumar(){
        let suma = this.num1 + this.num2;
        console.log(suma)
    }

    resta(){
        let resta = this.num1 - this.num2;
        console.log(resta)
    }

    multiplicar(){
        let multi = this.num1 * this.num2;
        console.log(multi)
    }

    dividir(){
        let dividir = this.num1 / this.num2;
        console.log(dividir)
    }

    potencia(){
        let poten = Math.pow(this.num1, this.num2);
        console.log(poten)
    }
    
    factorial(){
        let facto = Math.pow(this.num1, this.num2);
        console.log(facto)
    }
}