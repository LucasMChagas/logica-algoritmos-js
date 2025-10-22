const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const frase = frm.inFrase.value.replaceAll(" ","").toUpperCase();
    const tam = frase.length;

    let fraseInvertida = "";

    for (let i = tam; i >= 1; i--) {
        fraseInvertida += frase.charAt(i - 1);
    }

    if (frase === fraseInvertida){
        resp.innerText = `${frm.inFrase.value.toUpperCase()} é um palíndromo`;
    }else{
        resp.innerText = `${frm.inFrase.value.toUpperCase()} não é um palíndromo`;
    }
});



