let animales = ['Gatito', 'Perrito'];
console.log(animales);
console.log(animales[1]); //Acá imprime a "Perrito" ya que empieza a contarde desde "0"
animales[2] = 'Mi ex';
console.log(animales);

animales[10] = 'Pez';
console.log(animales[7]); //Acá muestra Undefined porque no tiene ningún valor definido
console.log(typeof animales); //Aca es reconocido el Array como un tipo de dato "Object"

console.log(animales.length); //Acá devuelve la cantidad de elementos que posee este Array = "11"