//questao 2 completa

// Classe Livro
class Livro {
    constructor(titulo, autor, ano, quantidade) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.quantidade = quantidade; // Quantidade de exemplares disponíveis
    }

    // Verifica se o livro está disponível
    estaDisponivel() {
        return this.quantidade > 0;
    }

    // Decrementa a quantidade de exemplares ao emprestar o livro
    emprestar() {
        if (this.estaDisponivel()) {
            this.quantidade--;
            return true;
        }
        return false;
    }

    // Incrementa a quantidade de exemplares ao devolver o livro
    devolver() {
        this.quantidade++;
    }
}

// Classe Usuario
class Usuario {
    constructor(nome, id) {
        this.nome = nome;
        this.id = id;
        this.livrosEmprestados = [];
    }

    // Empresta um livro
    emprestarLivro(livro) {
        if (livro.emprestar()) {
            this.livrosEmprestados.push(livro);
            console.log(`${this.nome} emprestou o livro: "${livro.titulo}"`);
        } else {
            console.log(`Livro "${livro.titulo}" não disponível.`);
        }
    }

    // Devolve um livro
    devolverLivro(livro) {
        const index = this.livrosEmprestados.indexOf(livro);
        if (index > -1) {
            livro.devolver();
            this.livrosEmprestados.splice(index, 1);
            console.log(`${this.nome} devolveu o livro: "${livro.titulo}"`);
        } else {
            console.log(`${this.nome} não tem o livro "${livro.titulo}" emprestado.`);
        }
    }

    // Exibe os livros emprestados pelo usuário
    listarLivrosEmprestados() {
        if (this.livrosEmprestados.length > 0) {
            console.log(`${this.nome} tem os seguintes livros emprestados:`);
            this.livrosEmprestados.forEach(livro => console.log(`- ${livro.titulo}`));
        } else {
            console.log(`${this.nome} não tem livros emprestados.`);
        }
    }
}

// Classe Empréstimo
class Emprestimo {
    constructor(usuario, livro, dataEmprestimo, dataDevolucao) {
        this.usuario = usuario;
        this.livro = livro;
        this.dataEmprestimo = dataEmprestimo;
        this.dataDevolucao = dataDevolucao;
    }

    // Exibe as informações do empréstimo
    exibirDetalhes() {
        console.log(`Empréstimo realizado para ${this.usuario.nome}:`);
        console.log(`- Livro: ${this.livro.titulo}`);
        console.log(`- Data de empréstimo: ${this.dataEmprestimo}`);
        console.log(`- Data de devolução: ${this.dataDevolucao}`);
    }
}

// Classe Biblioteca
class Biblioteca {
    constructor() {
        this.livros = [];
        this.usuarios = [];
        this.emprestimos = [];
    }

    // Adiciona um livro à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`Livro "${livro.titulo}" adicionado à biblioteca.`);
    }

    // Registra um novo usuário
    registrarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`Usuário "${usuario.nome}" registrado com sucesso.`);
    }

    // Empresta um livro para um usuário
    emprestarLivro(usuario, livro) {
        if (livro.estaDisponivel()) {
            const dataEmprestimo = new Date();
            const dataDevolucao = new Date(dataEmprestimo);
            dataDevolucao.setDate(dataDevolucao.getDate() + 7); // Devolução em 7 dias

            const emprestimo = new Emprestimo(usuario, livro, dataEmprestimo.toLocaleDateString(), dataDevolucao.toLocaleDateString());
            this.emprestimos.push(emprestimo);

            usuario.emprestarLivro(livro);
            emprestimo.exibirDetalhes();
        } else {
            console.log(`Livro "${livro.titulo}" não está disponível para empréstimo.`);
        }
    }

    // Devolve um livro para a biblioteca
    devolverLivro(usuario, livro) {
        usuario.devolverLivro(livro);
        console.log(`O livro "${livro.titulo}" foi devolvido à biblioteca.`);
    }

    // Exibe todos os livros da biblioteca
    listarLivros() {
        console.log("Livros disponíveis na biblioteca:");
        this.livros.forEach(livro => {
            console.log(`- ${livro.titulo} (${livro.quantidade} disponível(s))`);
        });
    }
}

// Demonstração do Sistema de Biblioteca

// Criando a biblioteca
const biblioteca = new Biblioteca();

// Criando alguns livros
const livro1 = new Livro("1984", "George Orwell", 1949, 3);
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, 2);
const livro3 = new Livro("Dom Casmurro", "Machado de Assis", 1899, 1);

// Adicionando livros à biblioteca
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);
biblioteca.adicionarLivro(livro3);

// Criando usuários
const usuario1 = new Usuario("João", 1);
const usuario2 = new Usuario("Maria", 2);

// Registrando usuários
biblioteca.registrarUsuario(usuario1);
biblioteca.registrarUsuario(usuario2);

// Emprestando livros
biblioteca.emprestarLivro(usuario1, livro1); // João empresta 1984
biblioteca.emprestarLivro(usuario2, livro2); // Maria empresta O Senhor dos Anéis
biblioteca.emprestarLivro(usuario1, livro3); // João empresta Dom Casmurro

// Exibindo livros emprestados pelos usuários
usuario1.listarLivrosEmprestados();
usuario2.listarLivrosEmprestados();

// Devolvendo livros
biblioteca.devolverLivro(usuario1, livro1); // João devolve 1984
usuario1.listarLivrosEmprestados();
biblioteca.listarLivros();
