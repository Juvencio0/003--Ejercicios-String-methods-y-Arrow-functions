function reemplazarPalabra(cadena, reemplazar, nuevaPalabra) {
    let cadenaModificada = cadena.replace(new RegExp(reemplazar, 'g'), nuevaPalabra);
    return cadenaModificada;
  }

  let textoOriginal = "Hola bro. ¿Cómo estás?";
  console.log("Texto uno"+textoOriginal)
  let nuevaCadena = reemplazarPalabra(textoOriginal, "hola", "bro");
  console.log(nuevaCadena); 