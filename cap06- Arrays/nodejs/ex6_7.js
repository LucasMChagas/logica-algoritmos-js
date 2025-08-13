const prompt = require("prompt-sync")();
console.log("Informe o valor dos saques ou 0 para sair: ");
const saques = [];

do {
    const valor = Number(prompt("Saque R$: "));
    if (valor === 0 ){
        break;
    }
    saques.push(valor);
    if(valor % 10 === 0){
        console.log("Saque realizado com sucesso");
    }else{
        console.log("Erro... valor inválido (deve ser multiplo de 10)");
    }
}while (true);

console.log("\nSaques Válidos");
console.log("-".repeat(40));
const saqueValidos = saques.filter(saque => saque % 10 === 0);
for(const saque of saqueValidos){
    console.log(saque.toFixed(2));
}
console.log("-".repeat(40));
const totalSacado = saqueValidos.reduce((total, saque) => total + saque, 0);
console.log(`Total dos saques: R$ ${totalSacado.toFixed(2)}`);

const saquesInvalidos = saques.length - saqueValidos.length;
console.log(`\nN° de tentativas de saques (saques inválidos): ${saquesInvalidos}`);