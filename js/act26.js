function palabraMasLarga(cadena) {
    return cadena.split(' ').reduce((a, b) => a.length > b.length ? a : b);
}
  console.log(palabraMasLarga("Ola bro... pq cehcas mi codigo?"));