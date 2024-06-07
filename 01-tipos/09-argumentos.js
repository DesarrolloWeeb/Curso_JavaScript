function suma(a, b) { //Acá las letras se les llama parametro
    console.log(arguments);
    return a + b ;
}

let resultado = suma(5, 6, 1, 2, 3); //Acá se está declarando el valor del parametro vacío que era "a" y pasa a valer "5" 
//Y pasa a llamarse ARGUMENTO
console.log(resultado);
console.log(typeof suma);