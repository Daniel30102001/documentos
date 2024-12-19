//questao 3 completa

const Publicacao = require('./Publicacao');

describe('Testes da classe Publicacao', () => {
    let publicacao;

    beforeEach(() => {
        publicacao = new Publicacao('Título da Publicação', 'Conteúdo da publicação', 'Autor da publicação');
    });

    test('Deve adicionar um comentário com sucesso', () => {
        const resultado = publicacao.adicionarComentario('Excelente publicação!');
        expect(resultado).toBe('Comentário adicionado com sucesso!');
        expect(publicacao.comentarios).toContain('Excelente publicação!');
    });

    test('Deve lançar erro ao tentar adicionar comentário vazio', () => {
        expect(() => publicacao.adicionarComentario('')).toThrowError('Comentário não pode ser vazio!');
    });

    test('Deve editar o conteúdo da publicação com sucesso', () => {
        const resultado = publicacao.editarConteudo('Novo conteúdo da publicação');
        expect(resultado).toBe('Conteúdo editado com sucesso!');
        expect(publicacao.conteudo).toBe('Novo conteúdo da publicação');
    });

    test('Deve lançar erro ao tentar editar conteúdo vazio', () => {
        expect(() => publicacao.editarConteudo('')).toThrowError('Conteúdo não pode ser vazio!');
    });

    test('Deve mostrar as informações da publicação corretamente', () => {
        const resultado = publicacao.mostrarInformacoes();
        expect(resultado).toBe('Título: Título da Publicação, Autor: Autor da publicação, Comentários: 0');
    });

    test('Deve mostrar as informações da publicação com comentários', () => {
        publicacao.adicionarComentario('Primeiro comentário');
        const resultado = publicacao.mostrarInformacoes();
        expect(resultado).toBe('Título: Título da Publicação, Autor: Autor da publicação, Comentários: 1');
    });
});
