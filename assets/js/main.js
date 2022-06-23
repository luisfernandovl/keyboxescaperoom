"strict mode"
//#region Constantes (elementos: Seções).
const todasSecoes = document.querySelectorAll('.secao');
let somatorioAlturasSecoes = 0;

for (let i = 0; i < todasSecoes.length; i++) {
    somatorioAlturasSecoes += todasSecoes[i].offsetHeight + 64;
}

const mediaAlturaSecoes = (somatorioAlturasSecoes / 2) / todasSecoes.length;
//#endregion

//Função das Seções (ficar visível conforme desce a página)
export function alterarEstadoDasSecoes() {
    for (let i = 1; i < todasSecoes.length + 1; i++) {
        if (window.scrollY >= mediaAlturaSecoes * i) {
            todasSecoes[i - 1].classList.add(`secao--animacao`);
        }
    }
}

const debounce = function (func, wait, imediate) {
    let timeout;
    return function (...args) {
        const context = this;
        const later = function () {
            timeout = null;
            if (!imediate) func.apply(context, args);
        };
        const callNow = imediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

//Quando o scroll é ativo -> mostra seções.
window.addEventListener('scroll', debounce(function () {
    alterarEstadoDasSecoes();
}, 20));
