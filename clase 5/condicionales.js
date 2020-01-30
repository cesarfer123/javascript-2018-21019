let num1=0;
let num2=0;


if(num1>0){ 
    
    if(num2>0){

        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2<0){

        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);

    }else{

        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);

    }

}else if(num1<0){

    if(num2>0){

        console.log(`${num1} es menor que 0 ${num2} es mayor que 0`);
    }else if(num2<0){

        console.log(`${num1} es menor que 0 y ${num2} es menor que 0`);

    }else{

        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);

    }

}else{

    if(num2>0){

        console.log(`${num1} es igual que 0 ${num2} es mayor que 0`);
    }else if(num2<0){

        console.log(`${num1} es igual que 0 y ${num2} es menor que 0`);

    }else{

        console.log(`${num1} es igual que 0 y ${num2} es igual a 0`);

    }

}
