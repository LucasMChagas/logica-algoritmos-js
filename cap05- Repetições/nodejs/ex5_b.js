const prompt = require("prompt-sync")();

const numeroChinchilas = Number(prompt("N° Chinchilas: "));
const anos = Number(prompt("N° Anos: "));
let totalChinchilas = numeroChinchilas;

for (let ano = 1; ano <= anos; ano++) {
    if (ano === 1){
        console.log(`${ano}° Ano: ${totalChinchilas} Chinchilas`);
        continue;
    }
    totalChinchilas *= 3;
    console.log(`${ano}° Ano: ${totalChinchilas} Chinchilas`);
}