//questao 6 completa

// Função para verificar se um número é positivo, negativo ou zero
function verificarNumero(numero: number): string {
    if (numero > 0) {
      return "Positivo";
    } else if (numero < 0) {
      return "Negativo";
    } else {
      return "Zero";
    }
  }
  
  // Exemplo de uso
  console.log(verificarNumero(5));   // Positivo
  console.log(verificarNumero(-3));  // Negativo
  console.log(verificarNumero(0));   // Zero
//

// Função para concatenar dois arrays
function concatenarArrays(arr1: number[], arr2: number[]): number[] {
    return arr1.concat(arr2);
  }
  
  // Exemplo de uso
  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];
  const arrayConcatenado = concatenarArrays(array1, array2);
  console.log(arrayConcatenado);  // [1, 2, 3, 4, 5, 6]
  