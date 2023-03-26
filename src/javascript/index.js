// step 1 - find a way to get the HTML element of the buttons

const buttonsCarousel = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");

// - step 2 - find a way to identify the user's click on the button

buttonsCarousel.forEach((button, indeX) => {
  button.addEventListener("click", () => {
    // step 3  uncheck the previous selected button
    desactivateSelectedButton();

    //     Step 4 mark the clicked button as if it were selected
    selectButtonCarousel(button);

    //   step 5 hide previous background image
    hideActiveImage();

    //     step 6 - make the background image corresponding to the clicked button appear
    showBackGroundImage(indeX);
  });
});

function showBackGroundImage(indeX) {
}
image[indeX].classList.add("active");

function selectButtonCarousel(button) {
  button.classList.add("selected");
}

function hideActiveImage() {
  const activeImage = document.querySelector(".active");
  activeImage.classList.remove("active");
}

function desactivateSelectedButton() {
  const buttonSelected = document.querySelector(".selected");
  buttonSelected.classList.remove("selected");
}
