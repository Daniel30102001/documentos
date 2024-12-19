//questao 3 completa

// Função para calcular a média de três números
function calcularMedia(num1, num2, num3) {
    // 1. Math.round() para arredondar o resultado
    const soma = num1 + num2 + num3;
    const media = soma / 3;
    return Math.round(media * 100) / 100; // Arredonda para 2 casas decimais
  }
  
  // Função para exibir a data atual formatada
  function exibirDataAtual() {
    const dataAtual = new Date(); // 2. new Date() para obter a data atual
    return dataAtual.toLocaleDateString('pt-BR'); // Formata para o padrão brasileiro
  }
  
  // Função principal para executar a tarefa
  function executarTarefa() {
    const num1 = 8.5;
    const num2 = 9.2;
    const num3 = 7.8;
  
    // Calcula a média
    const media = calcularMedia(num1, num2, num3);
  
    // 3. String.prototype.replace() para criar uma mensagem personalizada
    let mensagem = "A média calculada é: {media}. Data da execução: {data}";
    mensagem = mensagem.replace("{media}", media).replace("{data}", exibirDataAtual());
  
    // Exibe o resultado
    console.log(mensagem);
  }
  
  // Executa o código
  executarTarefa();
  