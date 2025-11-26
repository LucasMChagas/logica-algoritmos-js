const inRadios = document.querySelectorAll('input');
const imgClube = document.querySelector('#imgClube');
const dvTitulo = document.querySelector('#divTitulo');
const visita = document.querySelector("pre");

const trocarClube = ()=> {
    const clubes = ["Brasil", "Pelotas", "Farroupilha"];

    let selecao;
    for (let i = 0; i < inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i;
            break
        }
    }

    if (selecao <= 2){
        dvTitulo.className = `row cores-${clubes[selecao]}`;

        imgClube.src = `img/${clubes[selecao].toLowerCase()}.png`;
        imgClube.className = "img-fluid";
        imgClube.alt = `Simbolo do ${clubes[selecao]}`;

        localStorage.setItem("clube", clubes[selecao]);
    }else{
        dvTitulo.className = "row";
        imgClube.className = "d-none";
        imgClube.alt = "";
        localStorage.removeItem("clube");
    }
}

const verificarClube = ()=> {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube === "Brasil"){
            inRadios[0].checked = true;
        }else if(clube === "Pelotas"){
            inRadios[1].checked = true;
        }else{
            inRadios[2].checked = true;
        }
        trocarClube();
    }
}

const verificarVisita = () =>{
    if (localStorage.getItem("contadorVisita")) {
        let contador = Number(localStorage.getItem("contadorVisita"));
        contador++;
        localStorage.setItem("contadorVisita", contador.toString());
        visita.innerText = `Que bom que você voltou! Esta é a sua visita de numero ${contador}`;
    }else{
        localStorage.setItem("contadorVisita", String(1));
        visita.innerText = `Muito Bem vindo essa é sua primeira visita ao nosso site`;
    }

}

window.addEventListener("load", verificarClube);
window.addEventListener("load", verificarVisita);

for(const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube)
}