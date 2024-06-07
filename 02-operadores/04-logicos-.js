// AND, OR, NOT


// AND = &&

let mayor = false;
let suscrito =  true;

// console.log(true && true); // Cuando usamos este operador estamos indicandole a JS que tiene que evaluar a lo que se encuentra a su izquierda y también a su derecha
// // Por el conjunto de esos valores lo que va obtener sería un true o un false
// console.log(false && true);

console.log('operador and', mayor && suscrito);



// OR = ||

console.log('operador or', mayor || suscrito); // OR lo que hace es devolver TRUE si es que almenos uno de estos dos es verdadero
// la unica forma que devuelva FALSE es que los 2 sean FALSE



// NOT = !

console.log('operador not', !mayor); // Se puede utilizar cuando solo queremos dar acceso solamente al catalogo infantil de Nexflix
let soloCatalogoInfantil = !mayor;
