const Materias = {
    fisica: [90,6,3,"Fisica"],
    matematicas: [84,8,2,"Matematicas"],
    logica: [92,8,4,"Logica"],
    quimica: [96,8,4,"Quimica"],
    calculo: [91,6,3,"Calculo"],
    programacion: [79,7,4,"Programacion"],
    biologia: [75,9,2,"Biologia"],
    bbdd: [98,9,3,"BBDD"],
    algebra: [100,10,4,"Algebra"]
}

const aprobado = () =>{
    for ( iterador in Materias) {
        if((Materias[iterador][0])< 90){
            console.log(`%c ${Materias[iterador][3]}: Reprobado `, "color: black; background: red; padding:20px");
        }
        else{
            console.log(`%c ${Materias[iterador][3]}: Aprobado `, "color: white; background: green; padding:20px");
        }
    };
}

aprobado();

