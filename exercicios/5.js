//questao 5 completa

// Solicitar a conversão desejada ao usuário
let tipoConversao = prompt(
    "Digite 'C' para converter de Celsius para Fahrenheit ou 'F' para converter de Fahrenheit para Celsius:"
).toUpperCase();

if (tipoConversao === "C") {
    // Converter de Celsius para Fahrenheit
    let celsius = parseFloat(prompt("Insira a temperatura em Celsius:"));
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C é equivalente a ${fahrenheit.toFixed(2)}°F.`);
} else if (tipoConversao === "F") {
    // Converter de Fahrenheit para Celsius
    let fahrenheit = parseFloat(prompt("Insira a temperatura em Fahrenheit:"));
    let celsius = (fahrenheit - 32) * 5/9;
    alert(`${fahrenheit}°F é equivalente a ${celsius.toFixed(2)}°C.`);
} else {
    alert("Opção inválida. Por favor, tente novamente.");
}
