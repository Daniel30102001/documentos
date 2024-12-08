// questao 8 completa

// Menu do restaurante
const menu = {
    pizza: { descricao: "Deliciosa pizza com molho de tomate, queijo derretido e sua escolha de coberturas.", preco: 25.00 },
    hamburguer: { descricao: "Hambúrguer suculento com carne artesanal, queijo e molho especial.", preco: 20.00 },
    salada: { descricao: "Salada fresca com alface, tomate, cenoura e molho à sua escolha.", preco: 15.00 },
    macarrao: { descricao: "Macarrão ao molho branco ou vermelho com temperos especiais.", preco: 18.00 }
};

// Exibe as opções do menu
console.log("Bem-vindo ao nosso restaurante! Escolha um prato do menu:");
console.log("1. Pizza");
console.log("2. Hambúrguer");
console.log("3. Salada");
console.log("4. Macarrão");

// Recebe a entrada do usuário
const entrada = prompt("Digite o número correspondente ao prato:");

// Converte a entrada para um número e verifica a escolha
switch (parseInt(entrada)) {
    case 1:
        console.log(`Você escolheu Pizza.`);
        console.log(`Descrição: ${menu.pizza.descricao}`);
        console.log(`Preço: R$ ${menu.pizza.preco.toFixed(2)}`);
        break;
    case 2:
        console.log(`Você escolheu Hambúrguer.`);
        console.log(`Descrição: ${menu.hamburguer.descricao}`);
        console.log(`Preço: R$ ${menu.hamburguer.preco.toFixed(2)}`);
        break;
    case 3:
        console.log(`Você escolheu Salada.`);
        console.log(`Descrição: ${menu.salada.descricao}`);
        console.log(`Preço: R$ ${menu.salada.preco.toFixed(2)}`);
        break;
    case 4:
        console.log(`Você escolheu Macarrão.`);
        console.log(`Descrição: ${menu.macarrao.descricao}`);
        console.log(`Preço: R$ ${menu.macarrao.preco.toFixed(2)}`);
        break;
    default:
        console.log("Opção inválida! Por favor, escolha um número entre 1 e 4.");
        break;
}
