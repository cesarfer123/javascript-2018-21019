//res = response = respuesta
/* button.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById('list')
            const fragment = document.createDocumentFragment()
            for (const userInfo of res) {
                const listItem = document.createElement('LI')
                listItem.textContent = `${userInfo.id} - ${userInfo.name}`
                fragment.appendChild(listItem)
            }
            list.appendChild(fragment)
        })
}) */

const button=document.getElementById("button")

button.addEventListener("click",()=>{

    axios({
        method:"GET",
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res=>{

        const list=document.getElementById("list")
        const fragment=document.createDocumentFragment()

        for (const datos of res.data) {
            const listItem=document.createElement("li")
            listItem.textContent=`${datos.id} - ${datos.name}`
            fragment.appendChild(listItem)
        }

        list.appendChild(fragment)
    }   
    )
    .catch(err=>console.log(err))
})