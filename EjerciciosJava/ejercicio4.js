function numeroMayor(num1, num2){
    if(num1 % 2 == 0 && num2 % 2 == 0){
        let mayor = num1 < num2;
        console.log(`El numero entero mayor es ${mayor}`);
    }else if(num1 % 2 == 0 && num2 % 2 == 0){
        let result = num1 > num2;
        console.log(`El numero entero mayor es ${result}`)
    }else{
        console.log("Numero no valido")
    }
}

numeroMayor(10,12)