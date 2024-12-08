//questao 6 completa

// Solicitar dois números ao usuário
let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));

// Verificar se pelo menos um dos números é múltiplo do outro
if (num1 % num2 === 0 || num2 % num1 === 0) {
    alert("Pelo menos um dos números é múltiplo do outro.");
} else {
    alert("Nenhum dos números é múltiplo do outro.");
}
