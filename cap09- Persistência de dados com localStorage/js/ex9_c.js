const servico = document.querySelector('#inServico');
const btAdicionarServico = document.querySelector('#btAdicionarServico');
const servicosPendentes = document.querySelector('#respInServiçosPendentes');
const btExecutarServico = document.querySelector('#btExecutarServico');
const resp = document.querySelector("#resp");

btAdicionarServico.addEventListener('click', () => {
    if(servico.value === ""){
        alert("Campo vazio! Preenchimento obrigatório!");
        return;
    }
    let itens = localStorage.getItem("ServiçosEmExecução");
    if(itens === "" || itens === undefined || itens === null ){
        localStorage.setItem("ServiçosEmExecução", servico.value);
        contarItens(servico.value, servicosPendentes);
    }else{
        itens = itens + ";" + servico.value;
        localStorage.setItem("ServiçosEmExecução", itens);
        contarItens(itens, servicosPendentes);
    }
    servico.value = "";
})

btExecutarServico.addEventListener("click", () => {
    let lista = localStorage.getItem("ServiçosEmExecução");
    let array = lista.split(";");
    let item = array.shift();
    lista = array.join(";");
    localStorage.setItem("ServiçosEmExecução",lista);

    if(item === "" || item === null || item === undefined){
        resp.innerText = item;
    }else{
        resp.innerText = item;
    }
    contarItens(localStorage.getItem("ServiçosEmExecução"), servicosPendentes);
})

function contarItens(lista, element){
    let array = lista.split(";");
    if (array.length === 1 && array[0] === ""){
        element.innerText = `Serviços pendentes: ${0}`;
        return;
    }
    element.innerText = `Serviços pendentes: ${array.length.toString()}`;
}

window.addEventListener("load", ()=>{
    let lista = localStorage.getItem("ServiçosEmExecução");
    contarItens(lista, servicosPendentes);
})



