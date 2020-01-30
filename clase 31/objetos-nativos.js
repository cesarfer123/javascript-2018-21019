const button = document.getElementById('button')

/*
Objeto window - Es el objeto global, de él descienden todos los objetos
    alert()
    prompt()
    confirm()
*/

/* Objeto console - Es el objeto que contiene la consola del navegador
    https://developer.mozilla.org/es/docs/Web/API/Console
    console.log()
    console.dir() otra opcion a console.log()
    console.error()
    console.table()
*/


/*if(confirm("Acepta?")){
    
    console.log("si acepto");
}else{
    console.log("no acepto");
}*/

const person={

    name:"cesar chero",
    age:22,
    email:"cesarchero60@gmail.com"
}

// console.log(button);
// console.dir(button);
// console.error("Error")
// console.table(person)



/* Objeto location - Es el objeto que contiene la barra de direcciones
    https://developer.mozilla.org/es/docs/Web/API/Location
    location.href  devulve la url donde estamos
    location.protocol  sirve para ver el protocolo de la pagina https, http , etc
    location.host  devuelve el host(el dominio)
    location.pathname devulve el resto de dominio , o los subdirectorios
    location.hash
    location.reload()  hace que recargue la pagina
*/


// console.log(location.href);
// console.log(location.protocol);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.hash)
// location.reload()

// location.href="https://www.google.com.pe"


/* Objeto history
    https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador

    back()
    forward()
    go(n|-n)

    length
*/


/* Objeto date
    https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    https://www.w3schools.com/jsref/jsref_obj_date.asp
*/

// const date=new Date()
// console.log(date);


/*
Timers
    Timeout: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
    setTimeout(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)

    Interval: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval
    setInterval(()=>{code}, delay-in-miliseconds) - Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
*/

/*button.addEventListener("click",()=>{

    // setTimeout(saludar,3000)

    setTimeout(() => {
        console.log("Adios");
    },3000);
})

const saludar=()=>{
    console.log("HOLA");
}*/


/*const timeout=setTimeout(() => {
    console.log("DE NUEVO JUGANDO");

}, 3000);

button.addEventListener("click",()=>{
    clearTimeout(timeout)
})*/

const saludar=()=>{
    console.log("HOLA");
}

let cont=0

// const interval=setInterval(saludar,3000);

const interval = setInterval(() => {
    console.log(cont);
    cont++
}, 1000);

button.addEventListener("click",()=>{
    clearInterval(interval)
})