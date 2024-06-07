// Ejemplo de condición en el caso de que una persona quiera entrar a un cine
// y la pelicula tenga restrinción de edad

let edad = 10;

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13) {
    console.log('Usuario necesita ir acompañado por sus padres');
}else {
    console.log('No puede ingresar');
}   