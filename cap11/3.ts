

// Função para remover um item de um array
function removerItem(arr: any[], item: any): any[] {
  const index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

// Exemplo de uso
const array = [1, 2, 3, 4];
console.log(removerItem(array, 3));  // [1, 2, 4]
//

// Função para verificar se uma palavra existe em um array
function verificarPalavra(palavras: string[], palavra: string): boolean {
  return palavras.includes(palavra);
}

// Exemplo de uso
const palavras = ["maçã", "banana", "laranja"];
console.log(verificarPalavra(palavras, "banana"));  // true
console.log(verificarPalavra(palavras, "uva"));     // false
//

// Função para calcular a diferença de dois números
function calcularDiferenca(a: number, b: number): number {
  return Math.abs(a - b);
}

// Exemplo de uso
const diferenca = calcularDiferenca(10, 5);
console.log(`A diferença é: ${diferenca}`);
//

// Função para transformar uma string em minúsculas
function transformarMinusculas(texto: string): string {
  return texto.toLowerCase();
}

// Exemplo de uso
const textoMinusculo = transformarMinusculas("TYPEscript");
console.log(textoMinusculo);  // typescript
