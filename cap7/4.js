//questao 4 completa

// Criação do objeto produto
const produto = {
    nome: "Smartphone",
    preco: 1500,
    quantidade: 50,
    
    // Método para calcular o valor total do estoque
    calcularValorEstoque: function() {
      return this.preco * this.quantidade;
    }
  };
  
  // Calcular e imprimir o valor total do estoque
  const valorEstoque = produto.calcularValorEstoque();
  console.log(`Valor total do estoque de ${produto.nome}: R$ ${valorEstoque}`);
  