//questao 6 completa

// Função para verificar se um número é par
function ePar(numero: number): boolean {
  return numero % 2 === 0;
}

// Exemplo de uso
console.log(ePar(4));  // true
console.log(ePar(7));  // false
//

// Função para inverter uma string
function inverterString(texto: string): string {
  return texto.split('').reverse().join('');
}

// Exemplo de uso
const invertido = inverterString("TypeScript");
console.log(invertido);  // tpircSyepT
//

// Função para filtrar números maiores que um valor
function filtrarMaiorQue(numeros: number[], valor: number): number[] {
  return numeros.filter(num => num > valor);
}

// Exemplo de uso
const numerosFiltrados = filtrarMaiorQue([1, 5, 10, 15, 20], 10);
console.log(numerosFiltrados);  // [15, 20]
