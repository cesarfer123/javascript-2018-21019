const form=document.getElementById("form")
const keys=document.getElementById("keys")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const person={
        name:"fernando",
        email:"fernandocheroayasta@outlook.com"
    }
    // sessionStorage.setItem("person",JSON.stringify(person))
    // sessionStorage.setItem("name","cesar")
    localStorage.setItem(form.key.value,form.value.value)

    keys.innerHTML+=`<option>${form.key.value}</option>`
    // console.log(form.key.value);
    form.reset()
})


keys.addEventListener("change",()=>{

    document.getElementById("infoValue").textContent=localStorage.getItem(keys[keys.selectedIndex].textContent)
    console.log(keys[keys.selectedIndex].textContent);
})

// elimina el valor
localStorage.clear()
// elimina la clave y valor
localStorage.removeItem("age")