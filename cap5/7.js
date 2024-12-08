//questao 7 completa

// Solicitar os valores dos lados do triângulo
let lado1 = parseFloat(prompt("Insira o valor do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Insira o valor do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Insira o valor do terceiro lado do triângulo:"));

// Verificar se os lados formam um triângulo válido
if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    // Classificar o triângulo
    if (lado1 === lado2 && lado2 === lado3) {
        alert("O triângulo é equilátero (todos os lados iguais).");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        alert("O triângulo é isósceles (dois lados iguais).");
    } else {
        alert("O triângulo é escaleno (todos os lados diferentes).");
    }
} else {
    alert("Os valores fornecidos não formam um triângulo válido.");
}
