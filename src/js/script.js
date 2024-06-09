/*
    Objetivos:

    -- OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder

    -- OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// -- OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o proximo cartao da lista

// - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");

// - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
const btnVoltar = document.getElementById("btn-voltar");

let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

// - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
    const ultimoCartao = cartaoAtual === cartoes.length - 1;
    if (ultimoCartao) return;

    // - passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartoes();

    // - passo 3 - fazer aparecer o próximo cartão da lista
    cartaoAtual++;
    mostrarCartoes();
});

// -- OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista

// - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
btnVoltar.addEventListener("click", function () {
    const primeiroCartao = cartaoAtual === 0;
    if (primeiroCartao) return;

    // - passo 4 - buscar o cartão que esta selecionado e esconder
    esconderCartoes();

    // - passo 3 - fazer aparecer o cartão anterior da lista
    cartaoAtual--;
    mostrarCartoes();
});

function mostrarCartoes() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartoes() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}
