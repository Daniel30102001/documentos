//questao 12 completa

// Função para solicitar um número ao usuário
const solicitarNumero = (mensagem) => {
    const numero = parseFloat(prompt(mensagem)); // Obtém o número via prompt
    return numero;
  };
  
  // Funções para as operações matemáticas
  const adicionar = (num1, num2) => num1 + num2;
  const subtrair = (num1, num2) => num1 - num2;
  const multiplicar = (num1, num2) => num1 * num2;
  const dividir = (num1, num2) => num2 !== 0 ? num1 / num2 : "Erro: Divisão por zero"; // Verifica divisão por zero
  
  // Função para exibir o resultado
  const exibirResultado = (resultado) => {
    console.log(`Resultado: ${resultado}`);
  };
  
  // Função principal para executar o programa
  const executarCalculadora = () => {
    const num1 = solicitarNumero("Digite o primeiro número: ");
    const num2 = solicitarNumero("Digite o segundo número: ");
  
    const operacao = prompt("Escolha a operação: + (adição), - (subtração), * (multiplicação), / (divisão)");
  
    let resultado;
  
    switch (operacao) {
      case "+":
        resultado = adicionar(num1, num2);
        break;
      case "-":
        resultado = subtrair(num1, num2);
        break;
      case "*":
        resultado = multiplicar(num1, num2);
        break;
      case "/":
        resultado = dividir(num1, num2);
        break;
      default:
        resultado = "Operação inválida!";
    }
  
    exibirResultado(resultado); // Exibe o resultado da operação
  };
  
  // Chama a função principal para executar o programa
  executarCalculadora();
  