//questao 1 completa

// Funções Predefinidas em JavaScript categorizadas

// 1. Entrada e Saída de Dados
console.log("Mensagem"); // Exibe uma mensagem no console
alert("Mensagem"); // Exibe um alerta no navegador
prompt("Digite algo:"); // Solicita entrada do usuário
confirm("Você confirma?"); // Solicita confirmação do usuário

// 2. Manipulação de Strings
let str = "Exemplo";
str.length; // Obtém o tamanho da string
str.toUpperCase(); // Converte para letras maiúsculas
str.toLowerCase(); // Converte para letras minúsculas
str.trim(); // Remove espaços em branco das extremidades
str.slice(0, 4); // Corta a string entre índices
str.includes("Ex"); // Verifica se contém o valor
str.replace("Ex", "ExemploNovo"); // Substitui parte do texto
str.split(" "); // Divide a string em um array

// 3. Manipulação de Números
let num = 123.456;
Number.isInteger(num); // Verifica se é inteiro
Math.round(num); // Arredonda para o inteiro mais próximo
Math.floor(num); // Arredonda para baixo
Math.ceil(num); // Arredonda para cima
Math.random(); // Retorna um número aleatório entre 0 e 1
Math.max(1, 2, 3); // Retorna o maior valor
Math.min(1, 2, 3); // Retorna o menor valor

// 4. Manipulação de Arrays
let arr = [1, 2, 3, 4];
arr.push(5); // Adiciona ao final
arr.pop(); // Remove do final
arr.shift(); // Remove do início
arr.unshift(0); // Adiciona no início
arr.slice(1, 3); // Retorna uma cópia de parte do array
arr.splice(2, 1, "Novo"); // Altera o array removendo/inserindo
arr.forEach(x => console.log(x)); // Itera sobre os elementos
arr.map(x => x * 2); // Cria um novo array com transformações
arr.filter(x => x > 2); // Filtra elementos
arr.reduce((acc, x) => acc + x, 0); // Reduz os elementos a um único valor

// 5. Manipulação de Datas
let data = new Date();
data.toDateString(); // Retorna a data em formato legível
Date.now(); // Retorna a hora atual em milissegundos
data.getFullYear(); // Obtém o ano

// 6. Manipulação de Objetos
let obj = { chave: "valor" };
Object.keys(obj); // Retorna as chaves
Object.values(obj); // Retorna os valores
Object.entries(obj); // Retorna pares chave-valor
Object.assign({}, obj); // Copia o objeto

// 7. Tratamento de Erros
try {
  // Código que pode gerar erro
} catch (erro) {
  console.error(erro); // Captura o erro
} finally {
  console.log("Sempre executa");
}

// 8. Funções Globais
isNaN("Texto"); // Verifica se não é um número
parseInt("123"); // Converte string para número inteiro
parseFloat("123.45"); // Converte string para número decimal
encodeURIComponent("URL especial"); // Codifica componentes de URL
decodeURIComponent("URL%20especial"); // Decodifica componentes de URL

