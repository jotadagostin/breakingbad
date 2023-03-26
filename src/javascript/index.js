// // step 1 - find a way to get the HTML element of the buttons

// const buttonsCarousel = document.querySelectorAll(".button");
// const images = document.querySelectorAll(".image");

// // - step 2 - find a way to identify the user's click on the button

// buttonsCarousel.forEach((button, indeX) => {
//   button.addEventListener("click", () => {
//     // step 3  uncheck the previous selected button
//     desactivateSelectedButton();

//     //     Step 4 mark the clicked button as if it were selected
//     selectButtonCarousel(button);

//     //   step 5 hide previous background image
//     hideActiveImage();

//     //     step 6 - make the background image corresponding to the clicked button appear
//     showBackGroundImage(indeX);
//   });
// });

// function showBackGroundImage(indeX) {
// }
// image[indeX].classList.add("active");

// function selectButtonCarousel(button) {
//   button.classList.add("selected");
// }

// function hideActiveImage() {
//   const activeImage = document.querySelector(".active");
//   activeImage.classList.remove("active");
// }

// function desactivateSelectedButton() {
//   const buttonSelected = document.querySelector(".selected");
//   buttonSelected.classList.remove("selected");
// }


/* 
	OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - passo 1 - dar um jeito de pegar o elemento HTML dos botões

	- passo 2 - dar um jeito de identificar o clique do usuário no botão

	- passo 3 - desmarcar o botão selecionado anterior

	- passo 4 - marcar o botão clicado como se estivesse selecionada

	- passo 5 - esconder a imagem de fundo anterior

	- passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        // passo 3 - desmarcar o botão selecionado anterior      
        desativarBotaoSelecionado();

        // passo 4 - marcar o botão clicado como se estivesse selecionado
        selecionarBotaoCarrosel(botao);

        // passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();

        // passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
