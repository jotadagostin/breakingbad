// step 1- find a way to get the HTML element of the buttons

const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");

// step 2 - find a way to identify the user's click on the button
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    // step 3 - uncheck the previous selected button
    desativarBotaoSelecionado();

    // step 4- mark the clicked button as if it were selected
    selecionarBotaoCarrosel(botao);

    // step 5 - hide previous background image
    esconderImagemAtiva();

    // step 6 - make the background image corresponding to the clicked button appear
    mostrarImagemDeFundo(indice);
  });
});

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function selecionarBotaoCarrosel(botao) {
  botao.classList.add("selecionado");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".ativa");
  imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  botaoSelecionado.classList.remove("selecionado");
}
