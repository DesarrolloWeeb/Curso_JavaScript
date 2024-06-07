// Personaje de mi Vida

let nombre = "Rachel";
let cabello = "Castaño";
let edad = 19;

let personaje = {
    nombre: "Rachel",
    cabello: "Castaño",
    edad: 19,
}; //A estas llaves se les conoce como "OBJETO LITERAL"
console.log(personaje);// Accede a todas las propiedades del Objeto
console.log(personaje.nombre);// Accede a una propiedad utilizaos el punto y propiedad
console.log(personaje['cabello']);// Acceder a una propiedad utilizando los corchetes, comías simples y propiedad

personaje.edad = 20; // Para darle un nuevo valor a la propiedad

let llave = 'edad';
personaje.edad[llave] = 21; // Notación de parentecís cuadrados: También para darle un nuevo valor a la propiedad

delete personaje.cabello; //Esto es en el caso de querer borrar una propiedad de la entidad

console.log(personaje);
//DATOS IMPORTANTE: JS no asegura el orden de una propiedad a la hora de mostrarlo en la Consola del Navegador  