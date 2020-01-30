const days=["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
const title=document.getElementById("title")
const daysList=document.getElementById("daysList")
const daysSelect=document.getElementById("daysSelect")

// const itemList=document.createElement("LI");
// itemList.textContent="Lunes"

// daysList.appendChild(itemList)
title.innerHTML="DOM- <span> crear e insertar elementos I </span>"

const fragment=document.createDocumentFragment()

for (const day of days) {
    const itemList=document.createElement("LI");
    itemList.textContent=day
    fragment.appendChild(itemList);
}

const fragment2=document.createDocumentFragment()

for (const day of days) {
    const itemOptions=document.createElement("option")
    itemOptions.textContent=day
    fragment2.appendChild(itemOptions)
}

daysSelect.appendChild(fragment2)

daysList.appendChild(fragment)
console.log(fragment);