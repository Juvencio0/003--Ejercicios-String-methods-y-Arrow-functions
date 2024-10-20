function obtenerSubcadena(cadena, inicio, fin) {
    if (inicio < 0 || fin > cadena.length || inicio > fin) {
      return "Estos no son validos";
    }
    const subcadena = cadena.substring(inicio, fin);
    return subcadena;
  }
  let miCadena = "Bro, otra vez?";
  let subcadena = obtenerSubcadena(miCadena, 9, 5);
  console.log(subcadena);