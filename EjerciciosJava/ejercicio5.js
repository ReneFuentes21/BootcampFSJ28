function discount(carro){
    let carro1 = 4000;
    let carro2 = 3500;
    let carro3 = 5000;
    switch(carro){
        case "FORD FIESTA": 
        let fiesta = carro1 * 0.95;
        console.log(`El carro que compara es un ${carro} que tiene un 5%, el total es de ${fiesta}`);
        break;

        case "FORD FOCUS":
        let focus = carro2 * 0.90;
        console.log(`El carro que compara es un ${carro} que tiene un 10%, el total es de ${focus}`);
        break;

        case "FORD ESCAPE":
        let escape = carro3 * 0.80;
        console.log(`El carro que compara es un ${carro} que tiene un 20%, el total es de ${escape}`);
        break;

        default:
        console.log("El carro no tiene descuento.")
    }
}

discount("FORD ESCAPE");   
