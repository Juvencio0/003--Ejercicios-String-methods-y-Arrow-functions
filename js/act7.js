function eliminarEspacios(cadena) {
    return cadena.trim();
  }

let cadenaEspacios = "hermano, bro, noinijk";
let cadenaSinEspacios = eliminarEspacios(cadenaEspacios);
console.log(cadenaSinEspacios);