function contarOcurrencias(cadena, letra) {
    cadena = cadena.toLowerCase();
    letra = letra.toLowerCase();
    let contador = 0;
    for (let i = 0; i < cadena.length; i++) {
      if (cadena[i] === letra) {
        contador++;
      }
    }
    return contador;
  }

    let cadena = "bro?";
    let letra = "apko";
    let ocurrencias = contarOcurrencias(cadena, letra);
  console.log("La letra "+letra+" aparece"+ocurrencias+"veces en la cadena.");