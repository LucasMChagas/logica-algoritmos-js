const form = document.querySelector('form');
const imgClube = document.querySelector('#imgClube');
const dvTitulo = document.querySelector('#divTitulo');

const trocarClube = ()=>{
    let clube;

    if (form.rbBrasil.checked){
        clube = "Brasil";
    }else if(form.rbPelotas.checked){
        clube = "Pelotas";
    }else {
        clube = "Farroupilha"
    }

    dvTitulo.className = `row cores-${clube}`;

    imgClube.src = `img/${clube.toLowerCase()}.png`;
    imgClube.className = "img-fluid;";
    imgClube.alt = `Simbolo do ${clube}`;

    localStorage.setItem("clube", clube);
}

const verificarClube = ()=>{
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");

        if (clube === "Brasil"){
            form.rbBrasil.checked = true;
        }else if(clube === "Pelotas"){
            form.rbPelotas.checked = true;
        }else{
            form.rbFarroupilha.checked = true;
        }
        trocarClube();
    }
}

window.addEventListener("load", verificarClube);

form.rbBrasil.addEventListener("change", trocarClube);
form.rbPelotas.addEventListener("change", trocarClube);
form.rbFarroupilha.addEventListener("change", trocarClube);