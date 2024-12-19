//questao 1 completa

// Função de soma
function soma(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Erro: ambos os parâmetros devem ser números.';
    }
    return a + b;
}

// Função de subtração
function subtracao(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Erro: ambos os parâmetros devem ser números.';
    }
    return a - b;
}

// Função de multiplicação
function multiplicacao(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Erro: ambos os parâmetros devem ser números.';
    }
    return a * b;
}

// Função de divisão
function divisao(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Erro: ambos os parâmetros devem ser números.';
    }
    if (b === 0) {
        return 'Erro: divisão por zero não permitida.';
    }
    return a / b;
}

// Função de exponenciação
function exponenciacao(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return 'Erro: ambos os parâmetros devem ser números.';
    }
    return Math.pow(a, b);
}

// Testes com entradas válidas e inválidas
console.log("Soma (10 + 5):", soma(10, 5)); // Esperado: 15
console.log("Subtração (10 - 5):", subtracao(10, 5)); // Esperado: 5
console.log("Multiplicação (10 * 5):", multiplicacao(10, 5)); // Esperado: 50
console.log("Divisão (10 / 5):", divisao(10, 5)); // Esperado: 2
console.log("Exponenciação (2^3):", exponenciacao(2, 3)); // Esperado: 8

// Testes com strings
console.log("Soma (10 + '5'):", soma(10, '5')); // Esperado: "Erro: ambos os parâmetros devem ser números."
console.log("Subtração ('10' - 5):", subtracao('10', 5)); // Esperado: "Erro: ambos os parâmetros devem ser números."
console.log("Multiplicação ('10' * '5'):", multiplicacao('10', '5')); // Esperado: "Erro: ambos os parâmetros devem ser números."
console.log("Divisão (10 / '5'):", divisao(10, '5')); // Esperado: "Erro: ambos os parâmetros devem ser números."
console.log("Exponenciação ('2' ^ 3):", exponenciacao('2', 3)); // Esperado: "Erro: ambos os parâmetros devem ser números."

// Testes com objetos
console.log("Soma ({a: 1} + 5):", soma({a: 1}, 5)); // Esperado: "Erro: ambos os parâmetros devem ser números."
console.log("Subtração ({a: 1} - 5):", subtracao({a: 1}, 5)); // Esperado: "Erro: ambos os parâmetros devem ser números."

// Testes com números negativos
console.log("Soma (-10 + 5):", soma(-10, 5)); // Esperado: -5
console.log("Subtração (-10 - 5):", subtracao(-10, 5)); // Esperado: -15
console.log("Multiplicação (-10 * 5):", multiplicacao(-10, 5)); // Esperado: -50
console.log("Divisão (-10 / 5):", divisao(-10, 5)); // Esperado: -2
console.log("Exponenciação (-2^3):", exponenciacao(-2, 3)); // Esperado: -8

// Teste com divisão por zero
console.log("Divisão (10 / 0):", divisao(10, 0)); // Esperado: "Erro: divisão por zero não permitida."
