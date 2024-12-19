//questao 13 completa

// Criação de um array vazio para armazenar os filmes
let filmes = [];

// Solicitar ao usuário o nome dos filmes
for (let i = 1; i <= 5; i++) {
    let filme = prompt(`Informe o nome do ${i}º filme:`);
    filmes.push(filme);
}

// Exibindo os filmes informados no console
console.log("Filmes informados:");
filmes.forEach(filme => console.log(filme));
