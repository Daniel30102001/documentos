//questao 5 completa

// calculadora.js
function soma(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        throw new Error('Divisão por zero!');
    }
    return a / b;
}

module.exports = { soma, subtracao, multiplicacao, divisao };




// calculadora.test.js
const { soma, subtracao, multiplicacao, divisao } = require('./calculadora');

describe('Testes da Calculadora', () => {

    test('Soma de dois números', () => {
        expect(soma(1, 2)).toBe(3);
        expect(soma(-1, -1)).toBe(-2);
    });

    test('Subtração de dois números', () => {
        expect(subtracao(5, 3)).toBe(2);
        expect(subtracao(0, 3)).toBe(-3);
    });

    test('Multiplicação de dois números', () => {
        expect(multiplicacao(2, 3)).toBe(6);
        expect(multiplicacao(-2, 3)).toBe(-6);
    });

    test('Divisão de dois números', () => {
        expect(divisao(6, 3)).toBe(2);
        expect(divisao(-6, 3)).toBe(-2);
    });

    test('Divisão por zero deve lançar erro', () => {
        expect(() => divisao(6, 0)).toThrow('Divisão por zero!');
    });
});
