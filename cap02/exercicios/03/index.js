const frm = document.querySelector('form')
const respPromocao = document.querySelector('#outRespPromocao')
const respPreco = document.querySelector('#outRespPreco')

frm.addEventListener('submit', (e) => {
    let preco = Number(frm.inPreco.value);
    let produto = frm.inProduto.value;
    let desconto = preco * 0.5;

    respPromocao.innerText = `${produto} Promoção: Leve 3 por R$ ${(preco * 3 - desconto).toFixed(2)}`;
    respPreco.innerText = `O 3° Produto custa apenas R$ ${desconto.toFixed(2)}`;

    e.preventDefault();
})
