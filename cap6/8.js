//questao 8 completa

function testarEscopoBloco() {
    if (true) {
      // Variável declarada dentro do bloco if
      let dentroDoBloco = "Eu sou local ao bloco if!";
      console.log(dentroDoBloco);  // Acessa a variável dentro do bloco
    }
  
    // Tenta acessar a variável fora do bloco
    console.log(dentroDoBloco);  // Erro: dentroDoBloco não está definida
  }
  
  // Chama a função
  testarEscopoBloco();
  