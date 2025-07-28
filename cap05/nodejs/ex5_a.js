const prompt = require("prompt-sync")();

const fruta = prompt("Fruta: ");
const numero = Number(prompt("Número: "));

let handle = "";

for (let i = 0; i < numero; i++) {
    handle = handle + " " + fruta;
}
const resp = handle.replaceAll(" ", " * ")

console.log(resp.substring(2, resp.length));
