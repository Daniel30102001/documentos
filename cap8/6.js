//questao 6 completa

// Importando a biblioteca convert
const convert = require('convert');

// Função para converter dias em minutos
function converterDiasEmMinutos(dias) {
    const minutos = convert(dias).from('days').to('minutes');
    console.log(`${dias} dias equivalem a ${minutos} minutos.`);
}

// Função para converter gigabytes em bytes
function converterGigabytesEmBytes(gb) {
    const bytes = convert(gb).from('gb').to('bytes');
    console.log(`${gb} gigabytes equivalem a ${bytes} bytes.`);
}

// Exemplo de uso das funções
const dias = 5; // Exemplo de dias
const gigabytes = 2; // Exemplo de gigabytes

converterDiasEmMinutos(dias);
converterGigabytesEmBytes(gigabytes);
