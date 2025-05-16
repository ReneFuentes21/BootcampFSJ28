function numeroMayor(num1, num2){
    if(num1 % 2 == 0 && num2 % 2 == 0){
        if(num1 > num2){
            console.log(`El numero entero mayor es ${num1}`)
        }else{
            console.log(`El numero entero mayor es ${num2}`)
        }
    }else{
        console.log("Numero no valido")
    }
}

numeroMayor(10,12)