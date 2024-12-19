//questao 20 completa

// Criação do array de objetos representando pessoas
let pessoas = [
    { nome: 'João', idade: 15 },
    { nome: 'Maria', idade: 25 },
    { nome: 'Pedro', idade: 30 },
    { nome: 'Ana', idade: 17 }
];

// Usando o método find para encontrar a primeira pessoa com idade maior que 18
let pessoaMaiorDeIdade = pessoas.find(function(pessoa) {
    return pessoa.idade > 18;
});

// Exibindo o resultado no console
console.log(pessoaMaiorDeIdade);
