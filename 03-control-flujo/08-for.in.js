// Esta instrucción sirve para iterar las propiedades de un objeto

 let user = {
    id: 1,
    name: 'Chanchito feliz',
    age: 25,
 };

 for (let prop in user) {
    console.log(prop, user[prop]);

 }
// Resultado: Intrime las variables y las propiedades


// Antiguamente se hacía así, pero ya no es bueno usarlo
let animales = ['Chanchito feliz', 'Dragón', 'Canguro'];
for (let indice in animales) {
    console.log(indice, animales[indice]);
}