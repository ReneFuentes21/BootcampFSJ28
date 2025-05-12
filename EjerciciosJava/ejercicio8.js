function tablaMultiplicar(tabla){
    for(let i = 0; i <= 10; i++){
        let result = tabla * i
        console.log(`${tabla} * ${i} = ${result}`);
    }
}

tablaMultiplicar(5);