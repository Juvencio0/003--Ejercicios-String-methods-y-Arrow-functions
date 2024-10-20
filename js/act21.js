let reemplazarTodas = (cadena, palabra, reemplazo) => cadena.replaceAll(palabra, reemplazo);
let texto = "Quien eres y que haces checando mi codigo?";
console.log("xd?: "+texto)
let nuevoTexto = reemplazarTodas(texto, "hola", "adiós");
console.log(nuevoTexto);