let invertirCadena = cadena => cadena.split('').reverse().join('');
let cadenaOriginal = "invertida";
let cadenaInvertida = invertirCadena(cadenaOriginal);
console.log("la cadena original es:"+cadenaOriginal);
console.log("la cadena con funcion es: "+cadenaInvertida);