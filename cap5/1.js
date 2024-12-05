//questao 1 completa

// Função para classificar o triângulo
function classificarTriangulo(lado1, lado2, lado3) {
    // Verifica se os lados formam um triângulo válido
    if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
        if (lado1 === lado2 && lado2 === lado3) {
            return "Triângulo Equilátero";
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            return "Triângulo Isósceles";
        } else {
            return "Triângulo Escaleno";
        }
    } else {
        return "Triângulo Inválido";
    }
}

// Solicita ao usuário os valores dos lados do triângulo
const lado1 = parseFloat(prompt("Digite o valor do primeiro lado do triângulo:"));
const lado2 = parseFloat(prompt("Digite o valor do segundo lado do triângulo:"));
const lado3 = parseFloat(prompt("Digite o valor do terceiro lado do triângulo:"));

// Classifica e exibe o tipo de triângulo
const resultado = classificarTriangulo(lado1, lado2, lado3);
alert(`O triângulo é: ${resultado}`);
