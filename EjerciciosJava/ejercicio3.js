function salaryIncrease(name, salary , category, increase ){
    if (category == "A"){
        let aumento = salary * 0.15;
        console.log(`El empleado ${name} con la categoria ${category} y sueldo ${salary}, se le hara un aumento del ${increase}, su aumento sera de ${aumento}`);
    }else if ( category == "B"){
        let aumento = salary * 0.30;
        console.log(`El empleado ${name} con la categoria ${category} y sueldo ${salary}, se le hara un aumento del ${increase}, su aumento sera de ${aumento}`);
    }else if (category == "C"){
        let aumento = salary * 0.10;
        console.log(`El empleado ${name} con la categoria ${category} y sueldo ${salary}, se le hara un aumento del ${increase}, su aumento sera de ${aumento}`);
    }else if (category == "D"){
        let aumento = salary * 0.20;
        console.log(`El empleado ${name} con la categoria ${category} y sueldo ${salary}, se le hara un aumento del ${increase}, su aumento sera de ${aumento}`);
    }else {
        console.log("No tiene aumento")
    }

};

salaryIncrease("Rene Fuentes", 700, "E", 30 + "%")