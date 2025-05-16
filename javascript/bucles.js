//estructuras repetitivas
function contar(){
    // el for tiene tres elementos: contador, condicion (hasta donde llegara el bucle), incrementar/disminuir
    for (let i = 1; i <= 10; i++){
        console.log(`Contando ${i}`);
    }
}

//contar();


function tablaMultiplicar(tabla){
    for(let i = 0; i <= 10; i++){
        let result = tabla * i
        console.log(`${tabla} * ${i} = ${result}`);
    }
}

//tablaMultiplicar(5);
//tablaMultiplicar(20);

//while 

function contarWhile(){
    let i = 1;

    while(i <= 10){
        console.log(`Contador con while ${i}`);
        i++;
    }
}

contarWhile();


function contarDoWhile(){
    let i = 1
    do{
        console.log(`Contando con do while ${i}`);
        i++;
    }while( i >= 10)
    
}

contarDoWhile()