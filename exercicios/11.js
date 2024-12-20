// questao 11 completa

// Solicita ao usuário um número positivo
const numero = parseInt(prompt("Digite um número positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número positivo válido.");
} else {
    console.log(`Números ímpares de 0 até ${numero}:`);
    for (let i = 0; i <= numero; i++) {
        if (i % 2 !== 0) { // Verifica se o número é ímpar
            console.log(i);
        }
    }
}
