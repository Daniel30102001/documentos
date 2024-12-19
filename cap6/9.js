//questao 9 completa

// Arrow function para calcular a média de três números
const calcularMedia = (num1, num2, num3) => {
    const media = (num1 + num2 + num3) / 3;
    console.log(`A média dos números ${num1}, ${num2} e ${num3} é: ${media.toFixed(2)}`);
  }
  
  // Chama a função com três números como exemplo
  calcularMedia(8, 9, 10); // Output: A média dos números 8, 9 e 10 é: 9.00
  