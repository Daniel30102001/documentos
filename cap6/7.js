//questao 7 completa

// Variável global
let globalVar = "Eu sou global";

function testarEscopo() {
  // Variável local
  let localVar = "Eu sou local";

  console.log(globalVar); // Acessa a variável global
  console.log(localVar);  // Acessa a variável local
}

// Chama a função
testarEscopo();

// Tenta acessar as variáveis fora da função
console.log(globalVar); // Funciona, porque é global
console.log(localVar);  // Erro: localVar não está definida
