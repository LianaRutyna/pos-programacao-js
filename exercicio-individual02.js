function contarVogais(texto) {
 
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    const caracteres = texto.split('');
  
  
    const totalVogais = caracteres.filter(c => vogais.includes(c)).length;
    return totalVogais;
  }
  
  const texto = "gostaria de saber quantas vogais ha nesta frase";
  console.log(contarVogais(texto)); 