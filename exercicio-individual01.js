function filtrarN(lista) {
    return lista.filter(elemento => typeof elemento === 'number');
  }
  
  const listaCompleta = [1, 'uma string', 2, 'outra string', 3,4];
  const resultado = filtrarN(listaCompleta);
  console.log(resultado);


