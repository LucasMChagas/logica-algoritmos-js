const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const clubes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inClube.value;
    clubes.push(nome);

    frm.btListar.dispatchEvent( new Event("click"));

    frm.inClube.value = "";
    frm.inClube.focus();
});

frm.btMostrar.addEventListener("click", () => {
    let lista = "";
    if (clubes.length % 2 !== 0){
        respLista.innerText = "Número de clubes na tabela não é ímpar";
        return;
    }else{
        for (let index = 1; index <= clubes.length /2; ++index) {
            lista += `${clubes[index - 1]} x ${clubes[clubes.length - index]}\n`;
        }
        respLista.innerText = lista;
    }
});

frm.btListar.addEventListener("click", () => {
    let lista = "";

    if (clubes.length === 0){
        respLista.innerText = "Não há clubes na lista!";
        return;
    }

    for (let i = 0; i < clubes.length; i++) {
        lista += `${i+1}. ${clubes[i]}\n`;
    }
    respLista.innerText = lista;
})
