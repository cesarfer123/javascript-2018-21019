/*
Sintaxis Simple
switch(evaluación) {
    case n1: 
        //código
    break;
    case n2:
        //código
    break;
    default:
         //código
}
Sintaxis Múltiple
switch(evaluación) {
    case n1:
    case n2:
    case n3:
    case n4:
        //código
    break;
    case n5:
    case n6:
        //código
    break;
    default:
         //código
} 
*/


let numero=2;

switch(numero){

    case 1: console.log("Num tiene el valor de 1");
    break
    case 2: console.log("Num tiene el valor de 2");
    break;
    default: console.log("Num se desconoce");
}

switch(numero){

    case 1:
    case 3:
    case 5:
        console.log(`${numero} es impar`);
    case 2:
    case 4:
    case 6: 
        console.log(`${numero} es par`);
}