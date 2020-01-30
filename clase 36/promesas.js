const users = [
    {
        id: 1,
        name: 'Dorian'

    },
    {
        id: 2,
        name: 'Laura'
    },
    {
        id: 3,
        name: 'Carlos'
    }
]

const emails = [
    {
        id: 1,
        email: 'dorian@gmail.com'
    },
    {
        id: 2,
        email: 'lauraa@gmail.com'
    }
]

const getUser=(id)=>{

    const user=users.find(usuario=>usuario.id==id)

    const promise=new Promise((resolve, reject)=>{

        if(!user) reject(`doesnot exist an user with id ${id}`)
        else resolve(user)

    })

    return promise
 
}

const getEmail=(user)=>{

    const email=emails.find(email=>email.id==user.id)

    return promise=new Promise((resolve, reject)=>{

        if(!email) reject(`${user.name} hasnt email`)
        else resolve(
        {
            id:user.id,
            name:user.name,
            email:email.email
        })

    })
    
}

getUser(3)
    .then(user=>{
        // console.log(user)
        return getEmail(user)
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
// console.log(getUser(1));

// if(err) return console.log(err);
//     getEmail(user,(err,res)=>{
//         if(err) return console.log(err)
//         console.log(res);
// })