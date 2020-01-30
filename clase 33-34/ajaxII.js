const form=document.getElementById("form")
const characters=document.getElementById("characters")
const table=document.getElementById("table")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    getData(characters.children[characters.selectedIndex].value);
})

const getData=(id)=>{

    let xhr
    if(window.XMLHttpRequest) xhr=new XMLHttpRequest()
    else xhr=new ActiveXObject("Microsoft.XMLHTTP")

    if(id==undefined){

        xhr.open("GET",'https://jsonplaceholder.typicode.com/users')

        xhr.addEventListener("load",(data)=>{
            const datos = JSON.parse(data.target.response)
            console.log(datos)
        

            const fragment=document.createDocumentFragment()

            for (const heroes of datos) {

                const option=document.createElement("option")
                option.setAttribute("value",heroes.id)
                option.textContent=heroes.name
                fragment.appendChild(option)
                
            }
            // console.log(fragment);
            characters.appendChild(fragment)
        })
    }else{

        xhr.open("GET",`https://jsonplaceholder.typicode.com/users?id=${id}`)

        xhr.addEventListener("load",(data)=>{
            const datos = JSON.parse(data.target.response)
            console.log(datos)
        

            const fragment=document.createDocumentFragment()

            for (const heroe of datos) {

                const row=document.createElement("tr")
                const dataName=document.createElement("td")
                const dataUser=document.createElement("td")
                const dataEmail=document.createElement("td")
                const dataWebsite=document.createElement("td")
                const dataPhone=document.createElement("td")

                dataName.textContent=heroe.name
                dataUser.textContent=heroe.username
                dataEmail.textContent=heroe.email
                dataWebsite.textContent=heroe.website
                dataPhone.textContent=heroe.phone

                row.append(dataName)
                row.append(dataUser)
                row.append(dataEmail)
                row.append(dataWebsite)
                row.append(dataPhone)

                fragment.appendChild(row)
                
            }
            // console.log(fragment);
            if(table.children[1]){

                table.removeChild(table.children[1]);

            }
            console.log(table.children[0]);
            table.append(fragment)
        })
    }

    xhr.send()

}

getData()

