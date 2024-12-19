//questao 5 completa

// Função para calcular e exibir a média de três números
function calcularMedia(num1, num2, num3) {
    // Calcula a média
    const media = (num1 + num2 + num3) / 3;
  
    // Exibe o resultado no console
    console.log(`A média dos números ${num1}, ${num2} e ${num3} é: ${media.toFixed(2)}`);
  }
  
  // Chama a função com três números como exemplo
  calcularMedia(8, 9, 10); // Output: A média dos números 8, 9 e 10 é: 9.00
  