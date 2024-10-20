function repetirCadena(cadena, numeroRepeticiones) {
    if (typeof numeroRepeticiones !== 'number' || numeroRepeticiones < 1) {
      return "Numero de enterto debe ser un entero";
    }
    return cadena.repeat(numeroRepeticiones);
  }
  let cadenaOriginal = "Bro?";
  let numeroVeces = 3;
  let cadenaRepetida = repetirCadena(cadenaOriginal, numeroVeces);
  console.log(cadenaRepetida);