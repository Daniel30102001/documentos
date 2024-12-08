// questao 13 completa

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log("Bem-vindo ao jogo de adivinhação!");
console.log("Tente adivinhar o número secreto entre 1 e 100. Você tem até 10 tentativas.");

// Inicializa variáveis para o número de tentativas e o estado do jogo
let tentativas = 0;
const maxTentativas = 10;
let acertou = false;

// Loop para o jogo
while (tentativas < maxTentativas && !acertou) {
    // Solicita o palpite do usuário
    const palpite = parseInt(prompt(`Tentativa ${tentativas + 1}: Qual é o seu palpite?`));

    // Verifica se o palpite é válido
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        console.log("Por favor, insira um número válido entre 1 e 100.");
        continue;
    }

    // Incrementa o número de tentativas
    tentativas++;

    // Compara o palpite com o número secreto
    if (palpite === numeroSecreto) {
        console.log(`Parabéns! Você acertou o número secreto (${numeroSecreto}) em ${tentativas} tentativa(s)!`);
        acertou = true;
    } else if (palpite < numeroSecreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}

// Verifica se o usuário perdeu
if (!acertou) {
    console.log(`Você esgotou suas 10 tentativas. O número secreto era ${numeroSecreto}. Boa sorte na próxima vez!`);
}
