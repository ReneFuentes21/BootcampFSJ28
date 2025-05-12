//estructuras condicionales 

function parImpar(numero){
    if(numero % 2 == 0){
        console.log("El numero " + numero + " es par");
    }else{
        console.log("El numero " + numero + " es impar");
    };
};
parImpar(130);

//Ejercicio con else if
/** 
function tiendaCafeEjem(cantidad_cafe_ejem){
    //else- if
    const precio = 25;
    let result = 0;
    if(cantidad_cafe_ejem >= 5 && cantidad_cafe_ejem <= 10){ //rangos
        result = cantidad_cafe_ejem * precio * 0.80;
    }else if(cantidad_cafe_ejem > 10 && cantidad_cafe_ejem <= 20){
        result = cantidad_cafe_ejem * precio * 0.80;
        console.log("Tienes el 40%")
    }else if(cantidad_cafe_ejem > 20){
        result = cantidad_cafe_ejem * precio * 0.80;
        console.log("Tiene el 50%")
    }else{
        console.log("No hay promocion")
    }
    console.log(`Va pagar ${cantidad_cafe_ejem} cafes y su total es $${result}`  )
}
tiendaCafeEjem(15);
*/



function tiendaCafe(cantidad_cafe){
    let precio = 25
    if(cantidad_cafe >=5 && cantidad_cafe <= 10){
        let venta = cantidad_cafe * precio;
        let total = venta * 0.80;
        console.log("El total a pagar es de $ " + total);
    }else if(cantidad_cafe > 10 && cantidad_cafe <= 20){
        let venta = cantidad_cafe * precio;
        let total = venta * 0.60;
        console.log("El total a pagar es de $ " + total);
    }else if(cantidad_cafe > 20){
        let venta = cantidad_cafe * precio;
        let total = venta * 0.50;
        console.log("El total a pagar es de $ " + total);
    }else{
        console.log("No hay promocion");
    }
    

};
tiendaCafe(20)

//switch
function estacion(estacion){
    switch(estacion){
        case "Invierno":
            console.log("Hola");
            break;
    
        case "Verano":
            console.log("Fazbear");
            break;
        
        case "Otoño":
            console.log("Jones");
            break;

        case "Primavera":
            console.log("SilenSent");
            break;
        
        default:
            console.log("Ingresa una estacion valida");
            break;
    }
};

estacion("Invierno");

//Operador Ternario
function operadorTernario(numero){
    let result = numero % 2 == 0 ? `El numero ${numero} es par` : `El numero ${numero} es impar`;
    console.log(result);
};

operadorTernario(23);

