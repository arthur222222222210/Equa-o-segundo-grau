let valorA = document.getElementById("valor-a");
let valorB = document.getElementById("valor-b");
let valorC = document.getElementById("valor-c");

let botao = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

function calcularValores() {
    resultado.innerHTML = '';
    const a = Number(valorA.value);
    const b = Number(valorB.value);
    const c = Number(valorC.value);

    const delta = b * b - 4 * a * c;

    resultado.innerHTML = `delta = ${delta}`;

}

botao.addEventListener('click', calcularValores,false);