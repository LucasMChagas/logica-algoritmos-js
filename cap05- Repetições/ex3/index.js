let num;

 do {
    num = Number(prompt("Número"));

    if (num === 0 || isNaN(num)){
        alert("Número inválido");
    }
}while (num === 0 || isNaN(num))

let pares = `Pares entre 1 e ${num}: `;
console.log(pares);

for (let i = 2; i <= num; i+=2) {
    pares = pares + i + ",";
}
alert(pares);
