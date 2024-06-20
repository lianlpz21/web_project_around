import Card from "./Card.js";
import {
  closeModalWindow,
  formPopupAdder,
  formPopupRemover,
  initialCards,
  closePopupKey,
} from "./utils.js";
import FormValidator from "./FormValidator.js";

// Selección de elementos del DOM
const profileEditBtn = document.querySelector(".profile__edit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const profileCloseBtn = document.querySelector("#profile__popup-icon");
const cardsCloseBtn = document.querySelector("#cards__close-btn");
const editFormOpener = document.querySelector("#form__edit-opener");
const addFormOpener = document.querySelector("#form__add-cards-opener");
const overlay = document.querySelector(".overlay");
const inputName = document.querySelector("#input__name");
const inputJob = document.querySelector("#input__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");
const inputTitle = document.querySelector("#input__title");
const inputImage = document.querySelector("#input__image");
const closeIcon = document.querySelector(".modal__icon-close");
const modal = document.querySelector(".modal");
const formElements = document.querySelectorAll(".popup");

//* Open and close forms functions
profileEditBtn.addEventListener("click", () => {
  formPopupAdder(editFormOpener);
  closePopupKey(editFormOpener);
});

addBtn.addEventListener("click", () => {
  formPopupAdder(addFormOpener);
  closePopupKey(addFormOpener);
});

profileCloseBtn.addEventListener("click", () => {
  formPopupRemover(editFormOpener);
});

cardsCloseBtn.addEventListener("click", () => {
  formPopupRemover(addFormOpener);
});

//* Closing after clicking outside the popups
overlay.addEventListener("click", () => {
  formPopupRemover(editFormOpener);
  formPopupRemover(addFormOpener);
});

//* Sending personal info in form
editFormOpener.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formPopupRemover(editFormOpener);
});

//* Adding initial cards in the DOM
const cardsContainer = document.querySelector(".cards");
const templateSelector = "#template";
function addInitialCards(cardsData) {
  cardsData.forEach((cardData) => {
    const card = new Card(cardData, templateSelector);
    const cardElement = card.generateCard();
    cardsContainer.appendChild(cardElement);
  });
}
addInitialCards(initialCards);

//* Close modal window
closeIcon.addEventListener("click", () => closeModalWindow(modal));
modal.addEventListener("click", () => closeModalWindow(modal));

//* Validate profile form
const validation = new FormValidator(formElements, {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn-disabled",
  inputErrorClass: "error-active",
  errorClass: "popup__error",
});
validation.enableValidation();

//* Adding new cards in the DOM
addFormOpener.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const inputTitle = addFormOpener.querySelector("#input__title");
  const inputUrl = addFormOpener.querySelector("#input__url");
  const cardData = {
    name: inputTitle.value,
    link: inputUrl.value,
  };
  const card = new Card(cardData, templateSelector);
  const cardElement = card.generateCard();
  cardsContainer.prepend(cardElement);
  formPopupRemover(addFormOpener);
  inputTitle.value = "";
  inputUrl.value = "";
});
