//questao 10 completa

// Função para solicitar um número ao usuário
const solicitarNumero = (mensagem) => {
    const numero = parseFloat(prompt(mensagem)); // Obtém o número via prompt
    return numero; // Retorna o número
  };
  
  // Função para calcular a média de dois números
  const calcularMedia = (num1, num2) => {
    const media = (num1 + num2) / 2; // Calcula a média
    return media; // Retorna a média
  };
  
  // Função para exibir o resultado da média
  const exibirResultado = (media) => {
    console.log(`A média é: ${media.toFixed(2)}`); // Exibe a média formatada com 2 casas decimais
  };
  
  // Função principal que integra todas as outras
  const executarPrograma = () => {
    const num1 = solicitarNumero("Digite o primeiro número: "); // Solicita o primeiro número
    const num2 = solicitarNumero("Digite o segundo número: "); // Solicita o segundo número
  
    const media = calcularMedia(num1, num2); // Calcula a média
    exibirResultado(media); // Exibe o resultado
  };
  
  // Chama a função principal
  executarPrograma();
  