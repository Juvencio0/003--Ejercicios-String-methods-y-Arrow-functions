let palabra = "¿hola cómo esás?";

// function mayus(){
//     return palabra.toUpperCase();
// }

let mayus = palabra => palabra.toUpperCase();

resultado = mayus(palabra);
console.log("Tu palabra en mayúscula es: "+ resultado);
