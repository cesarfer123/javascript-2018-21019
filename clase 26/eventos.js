/* 
Eventos de ratón:
    click - cuando pulsamos el botón izquierdo del ratón
    dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
    mouseenter - cuando entramos en la zona que tiene el evento
    mouseleave - cuando salimos de la zona que tiene el evento
    mousedown - cuando pulsamos el boton izquierdo del ratón
    mouseup - cuando soltamos el boton izquierdo del ratón
    mousemove - cuando movemos el ratón
Eventos de teclado:
    keydown - cuando pulsamos una tecla
    keyup - cuando soltamos una tecla
    keypress - cuando pulsamos una tecla y no la soltamos
*/


const button=document.getElementById("button");

const box=document.getElementById("box");

/*button.addEventListener("click",()=>{

    console.log("click");
});*/

/*button.addEventListener("dblclick",()=>{

    console.log("dblclick");
});*/

/*box.addEventListener("mouseenter",()=>{
    // box.classList.add("green")
    box.classList.replace("red","green")

})*/

/*box.addEventListener("mouseleave",()=>{
    // box.classList.remove("green")
    // box.classList.add("red")
    box.classList.replace("green","red")
})*/

/*box.addEventListener("mousedown",()=>{
    console.log("Has pulsado en la casa");
})
box.addEventListener("mouseup",()=>{
    console.log("Has pulsado fuera de la caja");
})*/

/*box.addEventListener("mousemove",()=>{
    console.log("Estas moviendo el raton");
})*/

// EVENTOS DEL TECLADP

const input=document.getElementById("input")
input.addEventListener("keydown",()=>{
    console.log("Has pulsado una tecla")
    console.log(input.value);
})

input.addEventListener("keyup",()=>{
    console.log("has soltado la tecla");
})

input.addEventListener("keypress",()=>{
    console.log("ESTAS PULSANDO UNA TECLA");
})