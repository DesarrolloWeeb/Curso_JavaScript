// cuales son los números pares

let i = 2;
while (i < 2) {   // Cuando usamos este while lo primer que se ejuta es esta condición
    if (i % 2 == 0) {
        console.log('Numero par', i);
    }
    i++; 
    //El resultado de esto es nada
}

// do {
//     if (i % 2 == 0) {
//         console.log('Numero par', i);
//     }
//     i++; 
// } while (i < 2); // Pero cuando usamos un Do While la condición se ejecuta al final