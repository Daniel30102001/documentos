//questao 1 completa

// Criação do objeto aluno
const aluno = {
    nome: "Maria Souza",
    idade: 22,
    curso: "Engenharia Civil",
    notas: [9.5, 8.7, 10.0], // Notas do aluno em 3 matérias
  
    // Método para calcular a média das notas
    calcularMedia: function() {
      const somaNotas = this.notas.reduce((acc, nota) => acc + nota, 0);
      const media = somaNotas / this.notas.length;
      return media.toFixed(2); // Retorna a média com 2 casas decimais
    },
  
    // Método para exibir os dados do aluno
    exibirDados: function() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
      console.log(`Curso: ${this.curso}`);
      console.log(`Notas: ${this.notas.join(", ")}`);
      console.log(`Média: ${this.calcularMedia()}`);
    }
  };
  
  // Chama o método para exibir os dados do aluno
  aluno.exibirDados();
  