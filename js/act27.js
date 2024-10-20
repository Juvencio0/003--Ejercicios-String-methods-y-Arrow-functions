function toSnakeCase(cadena) {
    return cadena.replace(/\s+/g, '_').toLowerCase();
  }
  console.log(toSnakeCase("Ya dejame"));