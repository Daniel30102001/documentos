//questao 4 completa

// Solicitar o ano de nascimento ao usuário
let anoNascimento = parseInt(prompt("Insira o seu ano de nascimento:"));

// Obter o ano atual
let anoAtual = new Date().getFullYear();

// Calcular a idade
let idade = anoAtual - anoNascimento;

// Verificar se a pessoa é maior de idade
if (idade >= 18) {
    alert("Você tem " + idade + " anos. Você é maior de idade.");
} else {
    alert("Você tem " + idade + " anos. Você ainda não é maior de idade.");
}
