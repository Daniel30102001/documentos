// questao 10 completa

// Solicita ao usuário um número positivo
const numero = parseInt(prompt("Digite um número positivo:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número positivo válido.");
} else {
    console.log(`Números pares de 0 até ${numero}:`);
    let i = 0; // Inicializa o contador
    while (i <= numero) {
        if (i % 2 === 0) { // Verifica se o número é par
            console.log(i);
        }
        i++; // Incrementa o contador
    }
}
