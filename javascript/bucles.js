//estructuras repetitivas
function contar(){
    // el for tiene tres elementos: contador, condicion (hasta donde llegara el bucle), incrementar/disminuir
    for (let i = 1; i <= 10; i++){
        console.log(`Contando ${i}`);
    }
}

contar();


function tablaMultiplicar(tabla){
    for(let i = 0; i <= 10; i++){
        let result = tabla * i
        console.log(`${tabla} * ${i} = ${result}`);
    }
}


tablaMultiplicar(5);
tablaMultiplicar(20);

