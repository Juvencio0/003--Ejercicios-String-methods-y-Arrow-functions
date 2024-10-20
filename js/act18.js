let eliminarVocales = cadena => cadena.replace(/[aeiou]/gi, '');
let palabra = "Vocales";
console.log("con vocales "+palabra)
let sinVocales = eliminarVocales(palabra);
console.log("sin vocales :"+sinVocales);