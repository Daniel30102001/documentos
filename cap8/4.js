//questao 4 completa

// userDatabase.js

// Lista privada de usuários
const usuarios = [];

// Função para adicionar um novo usuário
function adicionarUsuario(nome, email, senha) {
    const usuario = { nome, email, senha };
    usuarios.push(usuario);
    console.log(`Usuário ${nome} adicionado com sucesso!`);
}

// Função para remover um usuário pelo email
function removerUsuario(email) {
    const index = usuarios.findIndex(usuario => usuario.email === email);
    if (index !== -1) {
        const usuarioRemovido = usuarios.splice(index, 1);
        console.log(`Usuário ${usuarioRemovido[0].nome} removido com sucesso!`);
    } else {
        console.log('Usuário não encontrado!');
    }
}

// Função para atualizar as informações de um usuário
function atualizarUsuario(email, novoNome, novoEmail, novaSenha) {
    const usuario = usuarios.find(usuario => usuario.email === email);
    if (usuario) {
        usuario.nome = novoNome || usuario.nome;
        usuario.email = novoEmail || usuario.email;
        usuario.senha = novaSenha || usuario.senha;
        console.log('Usuário atualizado com sucesso!');
    } else {
        console.log('Usuário não encontrado!');
    }
}

// Função para listar todos os usuários (apenas para fins de exemplo)
function listarUsuarios() {
    return usuarios;
}

// Expondo apenas as funções públicas
module.exports = {
    adicionarUsuario,
    removerUsuario,
    atualizarUsuario,
    listarUsuarios
};
