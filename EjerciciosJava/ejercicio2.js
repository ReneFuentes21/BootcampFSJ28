function notaFinal(name,carnet,examen,tarea,asistencia,investigación){
    let nota = examen + tarea + asistencia + investigación;
    let final = nota / 4;
    console.log(`La nota final del estudiante ${name} con el numero de carnet ${carnet} es de ${final}`);
}

notaFinal("Rene Fuentes", "123456789", 3, 1, 6 ,9);