const prompt = require("prompt-sync")();
const altura = prompt("Digite a altura da árvore: ");

for (let linha = 1; linha <= altura; linha++) {
    console.log(" ".repeat(30 - (linha - 1)) + "**".repeat(linha));
}