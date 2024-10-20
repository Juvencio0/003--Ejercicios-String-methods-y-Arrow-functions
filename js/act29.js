function comprimirCadena(cadena) {
    return cadena.replace(/(.)\1+/g, '$1');
  }
  console.log(comprimirCadena("heermano nooo puedee ser..."));