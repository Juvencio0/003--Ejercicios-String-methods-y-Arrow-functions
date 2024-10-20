let palindromo = palabra => {
    const palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
};
  const palabra = "oso";
  console.log(palindromo(palabra));
  console.log("la palabra es "+palabra);