//questao 3 completa

class Musica {
    constructor(titulo, artista, duracao, arquivo) {
        this.titulo = titulo;
        this.artista = artista;
        this.duracao = duracao; // em segundos
        this.arquivo = arquivo; // caminho do arquivo MP3
        this.reproduzindo = false;
    }

    reproduzir() {
        if (!this.reproduzindo) {
            console.log(`Reproduzindo: ${this.titulo} - ${this.artista}`);
            this.reproduzindo = true;
        } else {
            console.log(`${this.titulo} já está tocando.`);
        }
    }

    pausar() {
        if (this.reproduzindo) {
            console.log(`Pausando: ${this.titulo}`);
            this.reproduzindo = false;
        } else {
            console.log(`${this.titulo} não está tocando.`);
        }
    }
}
