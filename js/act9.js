function capitalizarPrimeraLetra(cadena) {
    if (!cadena) {
      return cadena;
    }
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }
let nombre = "Juvencio";
let nombreapoko = capitalizarPrimeraLetra(nombre);
  console.log(nombreapoko);