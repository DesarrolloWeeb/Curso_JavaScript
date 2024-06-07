// // Existen 5 tipos de Loops
// // 1. While, 2. do while, 3. for, 4. for in, 5. for ot
// su function es ejecutar una porción de código multiples veces

// Cuales son los numeros pares

let i = 0;
while  (i < 10) {
    if (i % 2 == 0){
        console.log('Numero par', i);
    }
    // tener mucho cuidado de hacer esta operación fuera del if porque sino tendríamos un bucle infinito
    i++;
}
    

console.log('Fuera del while'); // El resultado de esto es que imprime todos los numeros pares dentro del rango asignado
// 0, 2, 4, 6, 8, Fuera del while