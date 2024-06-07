
// Lo que tiene en común estos loops es que nos permiten a nosotros como vamos a realizar una iteración

// while
// do while
// for


let animales = ['Chanchito feliz', 'Dragón', 'Perrito']; //En JS existe una operación que permite iterar todos estos elemenos de una manera mas sencilla

for (let animal of animales) {
    console.log(animal);
}

let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++;
}

// Resultado 2 veces los animales