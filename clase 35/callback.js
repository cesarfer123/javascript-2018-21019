//Un callback es una función que se ejecuta a través de otra función
//Los callbacks no son asíncronos

/*const getUser=(id,cb)=>{

    const user={
        name:"cesar",
        id:id
    }

    console.log(user);

    // cb(null,user)
    // cb("user no exits")

    if(id==2) cb("user not exist")
    else cb(null,user)
}

getUser(1,(err,user)=>{
    if(err) return console.log(err);
    console.log(`User name is ${user.name}`);
})*/

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
        email: 'laura@gmail.com'
    }
]

const getUser=(id,cb)=>{

    const user=users.find(usuario=>usuario.id==id)

    if(!user) cb(`not exist a user with id ${id}`)
    else cb(null,user)
    // console.log(user);
}

const getEmail=(user,cb)=>{

    const email=emails.find(email=>email.id==user.id)
    if(!email) cb(`${user.name} hasnt email`)
    else cb(null,
        {
            id:user.id,
            name:user.name,
            email:email.email
        })
}

getUser(1,(err,user)=>{

    if(err) return console.log(err);
    getEmail(user,(err,res)=>{
        if(err) return console.log(err)
        console.log(res);
    })
    // console.log(user);
})