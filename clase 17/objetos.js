
const person={ 
    name: "cesar",
    age: 26,
    sons: ["regal de la rivia", "el brujo"]

}
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.sons[0]);

// for (const key in person) {
//     console.log(key);
// }

// for (const key in person) {
//     console.log(person[key]);
// }

// for (const son of person.sons) {
//     console.log(son);
// }

console.log(`Hola ${person.name} tienes ${person.age} años y tus hijos se llaman ${person.sons.join(",")}`);