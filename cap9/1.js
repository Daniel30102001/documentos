//questao 1 completa

// Classe de Usuário
class Usuario {
    constructor(nome, email) {
        this.nome = nome;
        this.email = email;
        this.amigos = [];
        this.publicacoes = [];
    }

    adicionarAmigo(amigo) {
        if (this.amigos.indexOf(amigo) === -1) {
            this.amigos.push(amigo);
            console.log(`${amigo.nome} foi adicionado à sua lista de amigos.`);
        } else {
            console.log(`${amigo.nome} já é seu amigo.`);
        }
    }

    removerAmigo(amigo) {
        const index = this.amigos.indexOf(amigo);
        if (index !== -1) {
            this.amigos.splice(index, 1);
            console.log(`${amigo.nome} foi removido da sua lista de amigos.`);
        } else {
            console.log(`${amigo.nome} não é seu amigo.`);
        }
    }

    criarPublicacao(conteudo) {
        const publicacao = new Publicacao(conteudo, this);
        this.publicacoes.push(publicacao);
        console.log('Publicação criada com sucesso!');
    }

    exibirPublicacoes() {
        console.log(`Publicações de ${this.nome}:`);
        this.publicacoes.forEach(pub => console.log(pub.conteudo));
    }
}

// Classe de Publicação
class Publicacao {
    constructor(conteudo, usuario) {
        this.conteudo = conteudo;
        this.usuario = usuario;
        this.dataCriacao = new Date();
    }

    exibirPublicacao() {
        console.log(`Publicação por ${this.usuario.nome} em ${this.dataCriacao}: ${this.conteudo}`);
    }
}

// Classe de RedeSocial
class RedeSocial {
    constructor() {
        this.usuarios = [];
    }

    adicionarUsuario(usuario) {
        this.usuarios.push(usuario);
        console.log(`${usuario.nome} foi adicionado à rede social.`);
    }

    listarUsuarios() {
        console.log("Usuários na rede social:");
        this.usuarios.forEach(usuario => {
            console.log(`- ${usuario.nome}`);
        });
    }

    buscarUsuarioPorNome(nome) {
        const usuario = this.usuarios.find(usuario => usuario.nome === nome);
        if (usuario) {
            console.log(`Usuário encontrado: ${usuario.nome}`);
        } else {
            console.log('Usuário não encontrado.');
        }
    }
}

// Demonstração do funcionamento
const rede = new RedeSocial();

const usuario1 = new Usuario('João', 'joao@example.com');
const usuario2 = new Usuario('Maria', 'maria@example.com');
const usuario3 = new Usuario('Pedro', 'pedro@example.com');

rede.adicionarUsuario(usuario1);
rede.adicionarUsuario(usuario2);
rede.adicionarUsuario(usuario3);

usuario1.adicionarAmigo(usuario2);
usuario2.adicionarAmigo(usuario3);

usuario1.criarPublicacao('Meu primeiro post!');
usuario2.criarPublicacao('Olá, mundo!');

usuario1.exibirPublicacoes();
usuario2.exibirPublicacoes();

rede.listarUsuarios();
rede.buscarUsuarioPorNome('Maria');
