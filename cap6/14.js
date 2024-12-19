//questao 14 completa

// Função para solicitar o peso ao usuário
const solicitarPeso = () => {
    const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
    return peso;
  };
  
  // Função para solicitar a altura ao usuário
  const solicitarAltura = () => {
    const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
    return altura;
  };
  
  // Função para calcular o IMC
  const calcularIMC = (peso, altura) => {
    return peso / (altura * altura);
  };
  
  // Função para determinar a classificação do IMC
  const classificarIMC = (imc) => {
    if (imc < 18.5) {
      return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
      return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidade";
    }
  };
  
  // Função para exibir o resultado
  const exibirResultado = (imc, classificacao) => {
    console.log(`Seu IMC é: ${imc.toFixed(2)}`);
    console.log(`Classificação: ${classificacao}`);
  };
  
  // Função principal para rodar o programa
  const calcularIMCPrograma = () => {
    const peso = solicitarPeso(); // Solicita o peso do usuário
    const altura = solicitarAltura(); // Solicita a altura do usuário
  
    const imc = calcularIMC(peso, altura); // Calcula o IMC
    const classificacao = classificarIMC(imc); // Classifica o IMC
  
    exibirResultado(imc, classificacao); // Exibe o resultado
  };
  
  // Chama a função principal para rodar o programa
  calcularIMCPrograma();
  