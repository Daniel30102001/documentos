// questao 12 completa

// Solicita ao usuário um número positivo
const numero = parseInt(prompt("Digite um número positivo para calcular o fatorial:"));

// Verifica se o número é válido
if (isNaN(numero) || numero < 0) {
    console.log("Por favor, insira um número positivo válido.");
} else {
    let fatorial = 1; // Inicializa o fatorial como 1

    // Calcula o fatorial usando um laço for
    for (let i = 1; i <= numero; i++) {
        fatorial *= i; // Multiplica o fatorial pelo valor atual de i
    }

    // Exibe o resultado
    console.log(`O fatorial de ${numero} é ${fatorial}.`);
}
