//questao 2 completa

// 1. String.prototype.slice()
const text = "Aprendendo JavaScript";
console.log(text.slice(10, 20)); // Output: "do JavaSc"

// 2. String.prototype.includes()
const sentence = "JavaScript é incrível!";
console.log(sentence.includes("incrível")); // Output: true

// 3. String.prototype.replace()
const greeting = "Olá, Mundo!";
console.log(greeting.replace("Mundo", "JavaScript")); // Output: "Olá, JavaScript!"



// 1. Array.prototype.map()
const numbers = [1, 2, 3, 4];
console.log(numbers.map(num => num ** 2)); // Output: [1, 4, 9, 16]

// 2. Array.prototype.filter()
const ages = [15, 18, 21, 16, 30];
console.log(ages.filter(age => age >= 18)); // Output: [18, 21, 30]

// 3. Array.prototype.reduce()
const prices = [10, 20, 30];
console.log(prices.reduce((sum, price) => sum + price, 0)); // Output: 60
