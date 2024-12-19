//questao 4 completa

const Comentario = require('./Comentario');

describe('Testes da classe Comentario', () => {
    let comentario;

    beforeEach(() => {
        comentario = new Comentario('Autor do comentário', 'Este é um comentário');
    });

    test('Deve editar o conteúdo do comentário com sucesso', () => {
        const resultado = comentario.editarConteudo('Novo conteúdo do comentário');
        expect(resultado).toBe('Conteúdo do comentário editado com sucesso!');
        expect(comentario.conteudo).toBe('Novo conteúdo do comentário');
    });

    test('Deve lançar erro ao tentar editar conteúdo vazio', () => {
        expect(() => comentario.editarConteudo('')).toThrowError('Conteúdo não pode ser vazio!');
    });

    test('Deve mostrar o comentário corretamente', () => {
        const resultado = comentario.mostrarComentario();
        expect(resultado).toBe('Comentário de Autor do comentário: Este é um comentário | Curtidas: 0');
    });

    test('Deve adicionar uma curtida ao comentário', () => {
        const resultado = comentario.curtir();
        expect(resultado).toBe('Curtida adicionada!');
        expect(comentario.curtidas).toBe(1);
    });

    test('Deve lançar erro ao tentar descurtir quando não há curtidas', () => {
        expect(() => comentario.descurtir()).toThrowError('Não é possível descurtir, o comentário não possui curtidas!');
    });

    test('Deve remover uma curtida do comentário', () => {
        comentario.curtir(); // Adicionando uma curtida
        const resultado = comentario.descurtir();
        expect(resultado).toBe('Descurtida removida!');
        expect(comentario.curtidas).toBe(0);
    });
});
