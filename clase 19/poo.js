class Person{

    constructor(nombre, apellido, edad){

        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;

        this.datos=`Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    }

    saludar(){

        return `Hola me llamo ${this.nombre} y tengo ${this.edad} años y me gusta el futbol`;
    }
}

const user=new Person("cesar","chero",22);
console.log(user.datos); 
console.log(user.saludar());

const user2=new Person("vanessa","vallejo",22);
console.log(user2.datos);
console.log(user2.saludar());
