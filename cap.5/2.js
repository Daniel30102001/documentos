//questao 2 completa

// Solicitar ao usuário que insira três números
let num1 = parseFloat(prompt("Insira o primeiro número:"));
let num2 = parseFloat(prompt("Insira o segundo número:"));
let num3 = parseFloat(prompt("Insira o terceiro número:"));

// Verificar qual número é o maior
let maior;

if (num1 > num2 && num1 > num3) {
    maior = num1;
} else if (num2 > num1 && num2 > num3) {
    maior = num2;
} else {
    maior = num3;
}

// Exibir o maior número
alert("O maior número é: " + maior);
