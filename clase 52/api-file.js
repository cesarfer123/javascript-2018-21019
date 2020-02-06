/* 
    API File
        Esta API nos sirve para leer archivos que el usuario cargue en la web. Se pueden cargar archivos desde un input de tipo file o desde el objeto DataTransfer de la API Drag&Drop.
        La interfaz más utilizada para interactuar con ella es FileReader
        https://developer.mozilla.org/es/docs/Web/API/FileReader
 */

 const fileInput=document.getElementById("file")
 const img=document.getElementById("img")
 const text=document.getElementById("text")
 const images = document.getElementById('images')
 /*
// LEYENDO UN .TXT
 fileInput.addEventListener("change",(e)=>{
     console.log(e.target.files);
     const file=e.target.files[0]
     console.log(file)
     const fileReader=new FileReader()
     fileReader.readAsText(file)
     fileReader.addEventListener("load",(e)=>{
         console.log(e)
         text.textContent=e.target.result
     })
 })*/

//  CARGA SIMPLE DE UNA IMAGEN
/*
 fileInput.addEventListener("change",(e)=>{
    //  console.log(e.target.files);
     const file=e.target.files[0]
     console.log(file)
     const fileReader=new FileReader()
     fileReader.readAsDataURL(file)
     fileReader.addEventListener("load",(e)=>{
         console.log(e)
         img.setAttribute("src",e.target.result)
     })
 })
*/

//  CARGA MULTIPLE DE IMAGENES

fileInput.addEventListener("change",(e)=>{
    //  console.log(e.target.files);
     const files=e.target.files
     const fragment=document.createDocumentFragment()
     
     for (const file of files) {
        const fileReader=new FileReader()
        const img=document.createElement("img")
        fileReader.readAsDataURL(file)
        fileReader.addEventListener("load",(e)=>{
            console.log(e)
            img.setAttribute("src",e.target.result)
        })

        fragment.appendChild(img)

     }

     images.appendChild(fragment)
     
 })