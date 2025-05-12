function convertor(grados){
    let fan = (grados * 9/5) +32;
    if(fan >= 14 && fan <=32){
        console.log("Temperatura Baja")
    }else if(fan > 32 && fan <=68){
        console.log("Temperatua Adecuada")
    }else if(fan > 68 && fan <=92){
        console.log("Temperatura Alta")
    }else{
        console.log("Tempertura Desconocida")
    }
};

convertor(2);