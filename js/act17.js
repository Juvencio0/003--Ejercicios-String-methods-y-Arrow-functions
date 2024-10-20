let contarPalabras = cadena => cadena.split(' ').length;
let texto = "Hola bro, como estas?";
console.log("este es la cadena: "+texto);
let numeroDePalabras = contarPalabras(texto);
console.log("Numero de palabras "+numeroDePalabras);