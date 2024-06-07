let a = 10;

 // TODOS ESTOS OPERADORES SE LLAMAN "RELACIONALES"
// console.log(a > 5); // Mayor
// console.log(a >= 5);  // Mayor e igual
// console.log(a < 5); // Menor
// console.log(a <= 5); // Menor e igual

//OPERADORES DE IGUALDAD
console.log(a == 10);  // evalua si la variable "a" es igual a 10  ----> Resultado = TRUE
console.log(a != 10); // evalua si la variable "a" es distinta de 10  ----> Resultado = FALSE
console.log(a == '10'); // Comparando con el STRING de 10  ----> Resultado = TRUE y porque nada más compara el valor pero no por el tipo de dato



// HOY EN DÍA ES MÁS RECOMENDABLE USAR ESTOS TIPOS DE OPERADORES

console.log(a === '10'); // Aquí si compara con el valor y tipo de datos ----> Resultado = FALSE
console.log(a !== '10');  // Para saber si es distinto o igual ------> Resultado = TRUE