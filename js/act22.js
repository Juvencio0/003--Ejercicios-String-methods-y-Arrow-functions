let convertirACamelCase = frase => frase.replace(/(?:^|\s)\w/g, letra => letra.toUpperCase()).replace(/\s+/g, '');
let frase = "Otra vez bro?";
console.log("Cadena: "+frase)
let camelCase = convertirACamelCase(frase);
console.log(camelCase);