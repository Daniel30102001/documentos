//questao 18 completa

// Criação do array de objetos representando carros
let carros = [
    { nome: 'Fusca', ano: 1965 },
    { nome: 'Civic', ano: 2015 },
    { nome: 'Camaro', ano: 2018 },
    { nome: 'Gol', ano: 2008 },
    { nome: 'Corolla', ano: 2020 }
];

// Usando o método filter para criar um novo array com carros fabricados após 2010
let carrosNovos = carros.filter(function(carro) {
    return carro.ano > 2010;
});

// Exibindo o novo array
console.log(carroNovos);
