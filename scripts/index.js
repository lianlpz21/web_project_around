const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__edit-btn");
const popupClose = document.querySelector(".popup__icon");
const body = document.querySelector(".body");

popupOpen.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  body.classList.add("body_popup-bg");
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  body.classList.remove("body_popup-bg");
});
