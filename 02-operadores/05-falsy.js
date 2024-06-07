// short-circuit

// Falso
// false ---> primer valor que devuelve un valor falso
// 0
// ''
// null
// undefined
// NaN ----> Este valor lo devuelve si hago una operación matematica y no logra traer un valor valido




//FALSY ------------> Así se les conoce a todos estos valores

let nombre =  'Rachel hermosa';
let username = nombre ||  'Anonimo'
console.log(username);


// Esta operación sirve para que en el caso de necesita que en otra funcion primero haya devuelto el valor una funcion el valor de TRUE podemos usar AND
function fn1() {
    console.log('ella es hermosa 1');
    return false;
}

function fn2() {
    console.log('ella es hermosa más 2');
    return true;
}

let x =  fn1() && fn2();