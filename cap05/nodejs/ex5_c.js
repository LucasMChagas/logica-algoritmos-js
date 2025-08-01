const prompt = require("prompt-sync")();

const num = Number(prompt("Número: "));
let divisores = "";
let soma = 0;

for (let i = 1; i < num; i++) {
    if(num % i === 0){
        divisores = divisores +`, ${i}`;
        soma += i;
    }
}

const saida = divisores.substring(2, divisores.length);
if (num === soma){
    console.log(`Divisores do ${num}: ${saida}(Soma: ${soma})`);
    console.log(`${num} É um Número Perfeito`);
}else{
    console.log(`Não é um Número Perfeito`);
}


