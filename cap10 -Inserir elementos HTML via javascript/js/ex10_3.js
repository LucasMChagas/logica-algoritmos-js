const form = document.querySelector('form');
const tbFilmes = document.querySelector("table");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = form.inTitulo.value;
    const genero = form.inGenero.value;

    inserirLinha(titulo, genero);
    gravarFilme(titulo, genero);

    form.reset();
    form.inTtitulo.focus();
});

const inserirLinha = (titulo, genero) => {
    const linha = tbFilmes.insertRow(-1);

    const col1 = linha.insertCell(0);
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = `<i class="exclui" title="Excluir">&#10008</i>`
}

const gravarFilme = (titulo, genero) => {
    if (localStorage.getItem("filmesTitulo")){
        const filmessTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo;
        const filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero;

        localStorage.setItem("filmesGenero", filmesGenero);
        localStorage.setItem("filmesTitulo", filmessTitulo);
    }else {
        localStorage.setItem("filmesGenero", genero);
        localStorage.setItem("filmesTitulo", titulo);
    }
}

window.addEventListener("load", ()=>{
    if (localStorage.getItem("filmesTitulo")){
        const titulo = localStorage.getItem("filmesTitulo").split(";");
        const generos = localStorage.getItem("filmesGenero").split(";");

        for (let i = 0; i < titulo.length; i++) {
            inserirLinha(titulo[i], generos[i]);
        }
    }
})

tbFilmes.addEventListener("click", (e) => {

    if (e.target.classList.contains("exclui")){

        const titulo = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma Exclusão do filme "${titulo}"?`)){
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("filmesTitulo");
            localStorage.removeItem("filmesGenero");

            for(let i = 0; i < tbFilmes.rows.length; i++){
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                gravarFilme(auxTitulo, auxGenero);
            }
        }
    }
});