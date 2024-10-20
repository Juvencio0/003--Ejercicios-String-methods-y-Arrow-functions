let truncarCadena = (cadena, longitud) => cadena.slice(0, longitud);

let textoLargo = "Esto es un texto muy largo";
console.log("texto largo es: "+textoLargo)
let textoCortado = truncarCadena(textoLargo, 10);
console.log("truncado: "+textoCortado);