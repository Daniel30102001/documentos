//questao 13 completa

// Função para solicitar o valor em Real ao usuário
const solicitarValorEmReal = () => {
    const valorReal = parseFloat(prompt("Digite o valor em Real (R$):"));
    return valorReal;
  };
  
  // Função para realizar a conversão de Real para Dólar
  const converterParaDolar = (valorReal, taxaDeCambio) => {
    return valorReal / taxaDeCambio;
  };
  
  // Função para exibir o resultado da conversão
  const exibirResultado = (valorDolar) => {
    console.log(`O valor convertido é: $${valorDolar.toFixed(2)} USD`);
  };
  
  // Função principal para executar o programa
  const executarConversao = () => {
    const valorReal = solicitarValorEmReal(); // Solicita o valor em Real
  
    // Taxa de câmbio (valor fictício; você pode substituir por uma taxa real)
    const taxaDeCambio = 5.10; // Exemplo: 1 Dólar = 5.10 Reais
  
    const valorDolar = converterParaDolar(valorReal, taxaDeCambio); // Realiza a conversão
    exibirResultado(valorDolar); // Exibe o resultado da conversão
  };
  
  // Chama a função principal para executar o programa
  executarConversao();
  