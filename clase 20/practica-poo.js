// Crea una clase Libro
// La clase libro tendrá título, autor, año y género.
// Crea un método que devuelva toda la información del libro
// Pide 3 libros y guárdalos en un array
// Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
// Validar que los campos no se introduzcan vacíos
// Validar que el año sea un número y que tenga 4 dígitos
// Validar que el género sea: aventuras, terror o fantasía
// Crea una función que muestre todos los libros
// Crea una función que muestre los autores ordenados alfabéticamente
// Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información

class Libro{

    constructor(title,author,year,gender){

        this.title=title;
        this.author=author;
        this.year=year;
        this.gender=gender;
    }

    getAuthor(){

        return this.author;
    }

    getInfoBook(){

        return `El nombre del libro es ${this.title} , el cual tiene de autor a ${this.author}, el año en que se escribio fue ${this.year}, y su genero es ${this.gender}`;
    }
    
    getGender(){

        return this.gender;
    }

  
}


let books=[];
while(books.length<3){

    let title=prompt("Introduce el titulo del libro");
    let author=prompt("Introduce el author del libro");
    let year=prompt("Introduce el año del libro");
    let gender=prompt("Introduce el genero del libro").toLowerCase();

    if(title!="" && author!="" && !isNaN(year) && year.length==4 && (gender=="aventura" || gender=="terror" || gender=="fantasia")){

        books.push(new Libro(title,author,year,gender))

    }
}

const showAllBooks=()=>{

    console.log(books);
}

const showAuthor=()=>{
    let authors=[];
    for (const book of books) {

        console.log(book.getAuthor());
        authors.push(book.getAuthor());
    }

    console.log(authors.sort());
}

const showGender=()=>{

    const gender=prompt("Introduce el genero a buscar");

    for (const book of books) {
        
        if(book.getGender()==gender){

            console.log(book.getInfoBook());
        }
    }
}

// showAllBooks();

// showAuthor()

showGender();