//questao 17 completa

// Criação do array de números de 1 a 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando o método map para criar um novo array onde cada número é multiplicado por 2
let numerosMultiplicados = numeros.map(function(numero) {
    return numero * 2;
});

// Exibindo o novo array
console.log(numerosMultiplicados);
