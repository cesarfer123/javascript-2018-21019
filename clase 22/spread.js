/*
Spread Operator (operador de expansión)
Su sintaxis es ...
*/

/* console.log(...numbers) */

//Enviar elementos en un array a una función

const numbers=[23,34,67,78,22,33];

console.log(...numbers);

const addNumbers=(a,b,c)=>{
    console.log(a+b+c);
}

let numbersToAdd=[1,2,3]

addNumbers(...numbersToAdd);

// añadir un array a otro array
/*
let userNews=["cesar","jose","manuel","cami","vane","maria"];
let users=["yova","fio","juana"];

userNews.push(...users);
console.log(userNews);*/

// copiar arrays
/*
let arr1=[1,2,3,4];
let arr2=[...arr1];
console.log(arr2);*/

// concatenar arrays

let arr1=[1,2,3,4];
let arr2=[5,6,7];
 
let arrConcat=[...arr1,...arr2];
// let arrConcat=arr1.concat(arr2);
console.log(arrConcat);

// ENVIAR UN NUMERO INDEFINIDO DE ARGUMENTOS A UNA FUNCION (PARAMETROS REST)

const restParams=(...numbers)=>{
    console.log(numbers);
}

restParams(1,2,3,4,5,6,7,8,9,10)

// LIBRERIA MATH

const numeros=[34,-4,30,65,6,8,4,4,3,3]
console.log(Math.max(...numeros));
console.log(Math.min(...numeros));

// ELIMINA LOS ELEMENTOS DUPLICADOS

console.log([...new Set(numeros)]);