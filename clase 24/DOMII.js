/* 
document.getElementById('id') - Acceder a un elemento a través de su id
document | element .querySelector('selectorCSS') - Accede al primer elemento que coincida con el selector CSS
document | element .querySelectorAll('selectorCSS') - Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/

/*
const title=document.getElementById("title");
console.log(title);
title.textContent="DOM accediendo a nodos"*/

// const paragraph=document.querySelectorAll(".paragraph")
// console.log(paragraph);

/*
const paragraph=document.querySelector(".paragraph")
console.log(paragraph)
const span=paragraph.querySelector("span")
console.log(span.textContent);

const paragraph2=document.getElementById("title").querySelector("span")
console.log(paragraph2.textContent)
*/

const paragraphs=document.querySelectorAll(".paragraph")

const paragraphsSpread=[...document.querySelectorAll(".paragraph")]

const paragraphsArray=Array.from(document.querySelectorAll(".paragraph"))
console.log(paragraphsArray);

paragraphs[0].style.color="red"

console.log(paragraphsSpread); //convertimos un nodelist en un array

paragraphsSpread.map((p)=>p.style.color="green")


