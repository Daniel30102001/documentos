//questao 5 completa

// Importando a biblioteca mathjs
const math = require('mathjs');

// Função para calcular o logaritmo de um número
function calcularLogaritmo(numero) {
    if (numero <= 0) {
        console.log('Erro: O número deve ser maior que zero para calcular o logaritmo.');
        return;
    }
    const resultado = math.log(numero); // Calcula o logaritmo natural (base e)
    console.log(`O logaritmo de ${numero} é: ${resultado}`);
}

// Solicitando o número ao usuário (usando prompt em um ambiente de navegador ou entrada no terminal em Node.js)
const numero = parseFloat(prompt('Digite um número para calcular o logaritmo:'));

// Chamando a função para calcular o logaritmo
calcularLogaritmo(numero);
