//questao 11 completa

// Função para gerar o número aleatório entre 1 e 100
const gerarNumeroSecreto = () => {
    return Math.floor(Math.random() * 100) + 1;
  };
  
  // Função para solicitar o palpite do usuário
  const solicitarPalpite = () => {
    const palpite = parseInt(prompt("Digite seu palpite (entre 1 e 100):"));
    return palpite;
  };
  
  // Função para verificar o palpite do usuário
  const verificarPalpite = (palpite, numeroSecreto) => {
    if (palpite < numeroSecreto) {
      return "O seu palpite é menor que o número secreto.";
    } else if (palpite > numeroSecreto) {
      return "O seu palpite é maior que o número secreto.";
    } else {
      return "Parabéns! Você acertou!";
    }
  };
  
  // Função para exibir o número de tentativas restantes
  const exibirTentativasRestantes = (tentativas) => {
    console.log(`Tentativas restantes: ${tentativas}`);
  };
  
  // Função principal para rodar o jogo
  const jogar = () => {
    const numeroSecreto = gerarNumeroSecreto(); // Gera o número secreto
    let tentativas = 10; // Número máximo de tentativas
  
    console.log("Bem-vindo ao jogo de adivinhação!");
    console.log("Tente adivinhar o número entre 1 e 100.");
  
    // Loop para as tentativas
    while (tentativas > 0) {
      const palpite = solicitarPalpite(); // Solicita o palpite do usuário
  
      // Verifica o palpite
      const resultado = verificarPalpite(palpite, numeroSecreto);
      console.log(resultado); // Exibe o resultado do palpite
  
      if (resultado === "Parabéns! Você acertou!") {
        break; // Encerra o jogo se o usuário acertou
      }
  
      tentativas--; // Diminui o número de tentativas
      exibirTentativasRestantes(tentativas); // Exibe tentativas restantes
  
      if (tentativas === 0) {
        console.log(`Você perdeu! O número secreto era: ${numeroSecreto}`);
      }
    }
  };
  
  // Chama a função principal para rodar o jogo
  jogar();
  