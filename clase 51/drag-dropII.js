const pendingTasks=document.getElementById("pending-tasks")
const finishedTasks=document.getElementById("finished-tasks")

pendingTasks.addEventListener("dragstart",(e)=>{
    // console.log(e.dataTransfer);
    e.dataTransfer.setData("text/plain",e.target.id)
    console.log(e.dataTransfer.getData("text"));
    // dataTransder
        // setData: establece la informacion que queremos compartir
        // getData: establece la informacion que queremos obtener

})

pendingTasks.addEventListener("drag",(e)=>{

    e.target.classList.add("active")
})

pendingTasks.addEventListener("dragend",(e)=>{

    e.target.classList.remove("active")
})
// OBLIGATORIO SI NO NO FUNCIONA
finishedTasks.addEventListener("dragover",(e)=>{

    e.preventDefault()
})

finishedTasks.addEventListener("drop",(e)=>{

    e.preventDefault()
    const element=document.getElementById(e.dataTransfer.getData("text"))
    console.log(element)
    element.classList.remove("active")
    finishedTasks.appendChild(pendingTasks.removeChild(element))
})