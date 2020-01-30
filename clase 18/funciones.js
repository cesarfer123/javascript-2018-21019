function saludar(){

    console.log("Buenos dias");
}

const despedida=()=> console.log("Adios");

despedida();
saludar();

const saludarUsuario=(user)=> console.log(`Buenos dias joven ${user}`);

saludarUsuario("cesar");

// const suma=(num1,num2)=>{

//     if(num1==2){
//         return num1+num2;
//     }

//     return num1;
// }

// console.log(suma(9,4));


const suma=(num1,num2)=> num1+num2;

let result=suma(3,6);
console.log(result);