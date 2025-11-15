const prompt = require("prompt-sync")();

const vinhos = [];

function incluir(){
    titulo("===< Inclusão de Vinhos >===");
    const marca = prompt("Marca...: ");
    const tipo = prompt("Tipo...: ");
    const preco = Number(prompt("Preço R$:"));
    vinhos.push({marca, tipo, preco});
    console.log("Ok! Vinho cadastrado com sucesso");
}

function listar(){
    titulo("===< Lista de Vinhos Cadastrados >===");
    console.log("Marca............. Tipo.............Preço R$:");
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`)
    }
}

function pesquisar(){
    titulo("===< Pesquisar por tipo de vinho >===");

    const pesquisa = prompt("Tipo: ");

    let contador = 0;
    console.log("Marca............. Tipo............. Preço R$:");

    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesquisa.toUpperCase())){
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`);
            contador++;
        }
    }
    if(contador === 0){
        console.log(`Obs.: não há vinhos cadastrados do tipo "${pesquisa}"`)
    }
}

function calcularMedia(){
    titulo("===< Média e destaques do cadastro de Vinhos >===");

    const num = vinhos.length;
    if (num === 0){
        console.log(`Obs.: não há vinhos cadastrados.`);
        return;
    }

    let total = 0;

    for (const vinho of vinhos) {
        total += vinho.preco;
    }

    const media = total / num ;

    const vinhos2 = [...vinhos];

    vinhos2.sort((a, b) => a.preco - b.preco);

    const menor =vinhos2[0];
    const maior = vinhos2[num - 1];

    console.log(`Preço médio dos vinhos R$: ${media.toFixed(2)}`);
    console.log(`Menor valor R$: ${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`Maior Valor R$: ${maior.preco.toFixed(2)} - ${maior.marca}`);
}

function titulo(texto){
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

do{
    titulo("===< Cadastro de Vinhos >===");
    console.log("1. Inclusão de Vinhos");
    console.log("2. Listagem de Vinhos");
    console.log("3. Pesquisa por tipo");
    console.log("4. Média e Destaques");
    console.log("5. Finalizar");
    const opcao = Number(prompt("Digite a opcao: "));

    if(opcao === 1){
        incluir();
    }else if(opcao === 2){
        listar();
    }else if(opcao === 3){
        pesquisar();
    }else if(opcao === 4){
        calcularMedia();
    }else{
        break;
    }

}while (true)