//questao 2 completa

const Usuario = require('./Usuario');

describe('Testes da classe Usuario', () => {
    let usuario;

    beforeEach(() => {
        usuario = new Usuario('João', 'joao@example.com');
    });

    test('Deve cadastrar um novo usuário', () => {
        const resultado = usuario.cadastrar('Maria', 'maria@example.com');
        expect(resultado).toBe('Usuário cadastrado com sucesso!');
        expect(usuario.nome).toBe('Maria');
        expect(usuario.email).toBe('maria@example.com');
        expect(usuario.ativo).toBe(true);
    });

    test('Deve lançar erro se nome ou email não forem fornecidos no cadastro', () => {
        expect(() => usuario.cadastrar('', '')).toThrowError('Nome e email são obrigatórios!');
    });

    test('Deve atualizar as informações do usuário', () => {
        const resultado = usuario.atualizar('Carlos', 'carlos@example.com');
        expect(resultado).toBe('Usuário atualizado com sucesso!');
        expect(usuario.nome).toBe('Carlos');
        expect(usuario.email).toBe('carlos@example.com');
    });

    test('Deve lançar erro se nome ou email não forem fornecidos na atualização', () => {
        expect(() => usuario.atualizar('', '')).toThrowError('Nome e email são obrigatórios!');
    });

    test('Deve deletar o usuário e torná-lo inativo', () => {
        const resultado = usuario.deletar();
        expect(resultado).toBe('Usuário deletado com sucesso!');
        expect(usuario.ativo).toBe(false);
    });

    test('Deve mostrar as informações do usuário', () => {
        const resultado = usuario.mostrarInformacoes();
        expect(resultado).toBe('Nome: João, Email: joao@example.com, Ativo: true');
    });

    test('Deve retornar erro se o usuário já estiver deletado e tentar mostrar informações', () => {
        usuario.deletar();
        const resultado = usuario.mostrarInformacoes();
        expect(resultado).toBe('Nome: João, Email: joao@example.com, Ativo: false');
    });
});
