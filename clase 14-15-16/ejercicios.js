// 1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años" Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings 

// solucion
/*
let nombre=prompt("Introduce tu nombre");
let edad=Number(prompt("Introduce tu edad"));

console.log(`Hola ${nombre}, tienes ${edad} años y el año que viene tendrás ${edad+1} años`);*/

// 2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo. triángulo = b * h/2 rectángulo = b * h círculo = π * r2 (pi * radio al cuadrado) 

// SOLUCION --- tambien podemos utilizar switch
/*
let base;
let altura;
let radio;
console.log("Programa para calcular area");
let area=prompt("Introduce la figura geometrica para saber su area");
if(area=="triangulo"){
    base=Number(prompt("Introduce la base"));
    altura=Number(prompt("Introduce la altura"));
    console.log(`El area del rectangulo con base ${base} y altura ${altura} es ${base*altura/2}`);
}else if(area=="rectangulo"){
    base=Number(prompt("Introduce la base"));
    altura=Number(prompt("Introduce la altura"));
    console.log(`El area del rectangulo con base ${base} y altura ${altura} es ${base*altura}`);
}else if(area=="circulo"){
    const PI=Math.PI;
    radio=Number(prompt("Introduce el radio"));
    console.log(`el area de circulo con radio ${radio*radio*PI}`);
}else{
    console.log("Figura geometrica no comtemplada");
}
*/

// 3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar 

// SOLUCION

/*
let numero=Number(prompt("Introduce un numero"));
for (let i = 1; i <= numero; i++) {
    
    if(i%2==0){

        console.log(`El numero ${i} es par`);
    }else{
        console.log(`El numero ${i} es impar`);

    }
    
}*/

// 4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no. Un número primo es aquel que solo es divisible por sí mismo y la unidad 

// SOLUCION

/*
let number=prompt("Introduce un numero mayor que 1");
let validar=true;
if(number==1) {
    console.log("El numero no es valido")
}
else{ 
    for (let i = 2; i < number; i++) {
        
        if(number%i===0){
            console.log(`el numero ${i}  es multiplo de ${number} y no es primo`);
            validar=false;
            // break;
        }
    }
}

if(validar) console.log(`${number} es primo`);*/
 

// 5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial. El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad. 

// SOLUCION
/*
let number=Number(prompt("Introduce un numero mayor que 0"));
let resultado=1;
if(number>0){

    for (let i = 1; i <= number; i++) {
        
        resultado=resultado*i;
    }

    console.log(resultado);

}else{
    console.log("Algo esta mal");
}*/

// 6 - Escribe un programa que permita ir introduciendo una serie indeterminadade números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido 

/*
let resultado=0;
let intentos=0;
while(resultado<50){

    let number=Number(prompt("Introduce un numero"));
    resultado+=number;
    intentos++;
}

console.log(`el total es ${resultado} y el numero de intentos consumidos es ${intentos}`);
*/


// Crea 3 arrays. El primero tendra 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola: -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6 -el array de pares e impares 

// SOLUCION
/*
let number=[12,14,23,43,45];
let pars=[];
let impar=[];

for (let i = 0; i < number.length; i++) {

    let aleatorio=Math.round(Math.random()*10);
    console.log(aleatorio);
    if(aleatorio!=0){

        let resultado=aleatorio*number[i];
        console.log(resultado);
        if(resultado%2==0){
            pars.push(resultado);
            console.log(pars);
        }else{
            impar.push(resultado);
            console.log(impar);
        }
    }
    
}*/

// 8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23 

// SOLUCION
/*
const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const dni = prompt("Introduce tu dni");
if(dni.length==8  && parseInt(dni)>0){
    // let letra=dni%23;
    console.log(`tu dni completo es ${dni}${letras[dni%23]}`);
}*/


// 9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
/*
let palabra=prompt("Introduce una palabra");
let arrayPalabra=palabra.split("");
let numeroVocales=0;
let numeroConsonantes=0;
let blanco=0;
console.log(palabra.split(""));
// juana
for (let i = 0; i < arrayPalabra.length; i++) {
    
    if(arrayPalabra[i]=="a" || arrayPalabra[i]=="e" || arrayPalabra[i]=="i" || arrayPalabra[i]=="o" || arrayPalabra[i]=="u"){

        numeroVocales++;
        
    }else if(arrayPalabra[i]==" "){
        
        blanco++
        // console.log("blanco",blanco);

    }else{

        numeroConsonantes++;
        // console.log("consonantes",numeroConsonantes);
    }
}

console.log(`el numero de vocales son ${numeroVocales} y el nuevo de consonantes es ${numeroConsonantes} y el total de palabas que tiene ${palabra} es ${arrayPalabra.length}`); */

//  10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.


let colores=["azul", "amarillo", "rojo", "verde", "rosa"];
let colorUsuario=prompt("Introduce tu color favorito");
if(colores.indexOf(colorUsuario)!==-1){

    console.log("Tu color se encuentra en el array");
}else{
    console.log("Tu color no esta definido");
}
