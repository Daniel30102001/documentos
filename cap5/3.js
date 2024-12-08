//questao 3 completa

// Solicitar as três notas ao usuário
let nota1 = parseFloat(prompt("Insira a primeira nota:"));
let nota2 = parseFloat(prompt("Insira a segunda nota:"));
let nota3 = parseFloat(prompt("Insira a terceira nota:"));

// Calcular a média
let media = (nota1 + nota2 + nota3) / 3;

// Verificar se o aluno foi aprovado ou reprovado
if (media >= 7) {
    alert("A média é: " + media.toFixed(2) + ". Aluno aprovado!");
} else {
    alert("A média é: " + media.toFixed(2) + ". Aluno reprovado!");
}
