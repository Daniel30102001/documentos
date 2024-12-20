// questao 9 completa

// Função para calcular o IMC
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}

// Função para classificar o IMC usando switch
function classificarIMC(imc) {
    switch (true) {
        case imc < 18.5:
            return "Abaixo do peso";
        case imc >= 18.5 && imc < 24.9:
            return "Peso normal";
        case imc >= 25 && imc < 29.9:
            return "Sobrepeso";
        case imc >= 30:
            return "Obesidade";
        default:
            return "Valor inválido";
    }
}

// Solicitar altura e peso do usuário
const altura = parseFloat(prompt("Digite sua altura em metros (ex: 1.75):"));
const peso = parseFloat(prompt("Digite seu peso em quilogramas (ex: 70):"));

// Validar os dados de entrada
if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
    console.log("Por favor, insira valores válidos para altura e peso.");
} else {
    // Calcular o IMC
    const imc = calcularIMC(peso, altura);

    // Classificar o IMC
    const classificacao = classificarIMC(imc);

    // Exibir o resultado
    console.log(`Seu IMC é ${imc.toFixed(2)}.`);
    console.log(`Classificação: ${classificacao}`);
}
