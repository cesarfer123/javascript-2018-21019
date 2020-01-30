

let numbers=[1,2,3,4,5,100,200];

console.log(numbers);

console.log(numbers.length);


let numero=4;

console.log(Array.isArray(numbers));

// shi elimina el primero elemento del array, se puede almacenar el elemento eliminado

numbers.shift();
console.log(numbers);

// pop elimina el ultimo elemento de un array

numbers.pop();
console.log(numbers);

// Añade un elemento al final de un array y devuelve la nueva longitud

let newNumber=numbers.push(100);
console.log(numbers);
console.log(newNumber);
// Añade un elemento al inicio de un array
let newNumber2=numbers.unshift(0);
console.log(numbers);
console.log(newNumber2);

// indexof() devuelve el inidice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

console.log(numbers.indexOf(100));

// lastindexof() devuelve el ultimo indice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado

console.log(numbers.lastIndexOf(100));

// reverse() invierte los valor del array

// console.log(numbers.reverse());

// join(separador) - devuelve un string con el separador que indiquemos , por defecto son comas

// console.log(numbers.join("-"));



/*     
    .splice(a,b,items) - Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
        a - Indice de inicio
        b - Número de elementos (opcional)
        items - Elementos a añadir en el caso de que se añadan. (opcional)
*/


console.log(numbers);
// numbers.splice(4) - elimina desde la posicion 4 hasta el final 
// numbers.splice(2,2) - elimina desde la posicion a el numero que le indiquemos(  2do parametro) 
// numbers.splice(2,2,30,40,50)  - si b(2do parametro) es un valor disitinto de 0 elimina el numero de valores que inidiquemos en b y añade los valores de items a partir de a posicion a

console.log(numbers);


/* 
    .slice(a,b) - Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.
*/

// let otherNumber=numbers.slice();
// console.log(otherNumber);
// console.log(numbers);

// crea un nuevo array desde la posicion 2

// let otherNumber2=numbers.slice(2);
// console.log(otherNumber2);
// console.log(numbers);

let otherNumber3=numbers.slice(2,4);
console.log(otherNumber3);
console.log(numbers);