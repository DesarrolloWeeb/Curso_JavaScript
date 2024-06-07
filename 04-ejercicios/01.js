function cualEsMayor(a, b) {
    // if (a > b) {
    //     return a;
    // } else {           //Esta es la primera forma pero algo larga
    //     return b;
    // }

    return (a > b) ? a : b;  //Esta es la forma más corta
}


let mayor = cualEsMayor(10, 5);

console.log(mayor);