function destinoViaje(destino){
    let origen = "Ciudad de Palma"
    if(destino == "La Costa del Sol"){
        let costo = 200;
        let precio = costo * 0.95;
        console.log(`Desde ${origen} hasta ${destino} tiene un precio de $200, pero con un descuento del 5% el total es de:$ ${precio}`);
    }else if(destino == "Panchimalco"){
        let costo = 500;
        let precio = costo * 0.90;
        console.log(`Desde ${origen} hasta ${destino} tiene un precio de $500, pero con un descuento del 10% el total es de:$ ${precio}`);
    }else if(destino == "Puerto el Triunfo"){
        let costo = 700;
        let precio = costo * 0.85;
        console.log(`Desde ${origen} hasta ${destino} tiene un precio de $700, pero con un descuento del 15% el total es de:$ ${precio}`);
    }else {
        console.log("Ubicacion sin descuento")
    }
}

destinoViaje("Puerto el Triunfo");