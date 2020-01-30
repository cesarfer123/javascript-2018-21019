let mensaje="Hola Mundo Cruel";
console.log(mensaje.length);


let mayuscula=mensaje.toUpperCase();
console.log(mayuscula);

let minuscula=mensaje.toLowerCase();
console.log(minuscula);

console.log(mensaje.indexOf("o"));  //devuelve la primera coincidencia

console.log(mensaje.replace("Mundo","Word"));  //reemplaza

console.log(mensaje.substring(3,10)); //coge el inidice del string para adelante(solo declarando un parametro)

console.log(mensaje.slice());


let frase="Hola Youtube estamos trabajando con cadenas desde doriam design";
console.log(frase);
// elimina los espacios al inicio y al final
console.log(frase.trim());

// ES6
console.log(frase.startsWith("H"));
console.log(frase.startsWith("h"));
// evalua si la variable comienza con cierto valor
// devuelve true o false 


console.log(frase.endsWith("n"));
console.log(frase.endsWith("a",4));
// evalua si la variable finaliza con cierto valor
// devuelve true o false (el segundo parametro se cuenta desde el 1)

console.log(frase.includes("a"));
// evalua si incluye el valor a en la variable
console.log(frase.includes("H",0));
// con el segundo parametro le decimos desde que posicion debe de buscar el valor 

let palabra="Iphone";
console.log(palabra.repeat(5));

// TEMPLATE STRING

let nombre="cesar";
let apellido="chero";
let edad=22;
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años`);