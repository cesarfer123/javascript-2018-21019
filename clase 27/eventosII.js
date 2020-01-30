
const form=document.getElementById("form")
const input=document.getElementById("input")
const button=document.getElementById("button")
/*
input.addEventListener("keyup",(e)=>{
    console.log(e);
    console.log(input.value);
});

input.addEventListener("keyup",(e)=>{

    console.log(e.explicitOriginalTarget.attributes[1].nodeValue);

})

button.addEventListener("click",(e)=>{
    console.log(e.target);
})


*/

/*
const gallery=document.getElementById("gallery")

gallery.addEventListener("click",(e)=>{
    console.log(e.target.textContent);
    e.target.classList.add("red")
})*/

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("enviando");
})
// button.addEventListener("click",()=>{
//     input.value="Has hecho click";
// })
