const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__edit-btn");
const popupClose = document.querySelector(".popup__icon");
const overlay = document.querySelector(".overlay");

popupOpen.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
  // overlay.style.display = "block"; // Mostrar el overlay cuando se abre el popup
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
  // overlay.style.display = "none";
});
