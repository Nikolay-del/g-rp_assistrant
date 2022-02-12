const openButton = document.querySelectorAll(".button-entry");
const popup = document.querySelector(".modal");
const modalFade = document.querySelector(".modal-entrance");
const closeButton = document.querySelector(".modal-entrance__close")


for (let i = 0; i < openButton.length; i++) {
  openButton[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add("modal--show");
    modalFade.classList.add("modal-blackout");
  })
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal--show")) {
      evt.preventDefault();
      popup.classList.remove("modal--show");
      modalFade.classList.remove("modal-blackout");
    }
  }
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  modalFade.classList.remove("modal-blackout");
});
