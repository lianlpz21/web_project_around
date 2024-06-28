import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Section from "./Section.js";
import Popup from "./Popup.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import UserInfo from "./UserInfo.js";
import "./styles/index.css";

import {
  closeModalWindow,
  formPopupAdder,
  formPopupRemover,
  initialCards,
  closePopupKey,
} from "./utils.js";

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
const cardsContainer = document.querySelector(".cards");
const templateSelector = "#template";

//* User info
const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__occupation",
});

//* Handle card click function
function handleCardClick(data) {
  imagePopup.open(data);
}

//* Create card function
function createCard(data) {
  const card = new Card(data, templateSelector, handleCardClick);
  return card.generateCard();
}

//* Adding initial cards in the DOM - Instance
const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = createCard(data);
      cardList.addItem(cardElement);
    },
  },
  ".cards"
);

//* Render of initial cards
cardList.renderItems();

//* Validate profile form
const validation = new FormValidator(formElements, {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn-disabled",
  inputErrorClass: "error-active",
  errorClass: "popup__error",
});
validation.enableValidation();

//* PopupWithImage instance
const imagePopup = new PopupWithImage(".modal");
imagePopup.setEventListeners();

const profilePopup = new PopupWithForm(".popup#form__edit-opener", {
  handleFormSubmit: (data) => {
    userInfo.setUserInfo(data);
  },
});
profilePopup.setEventListeners();

//* Instance of PopupWithForm for adding new cards
const addCardPopup = new PopupWithForm("#form__add-cards-opener", {
  handleFormSubmit: (data) => {
    const cardElement = createCard(data);
    cardList.addItem(cardElement);
    addCardPopup.close();
  },
});
addCardPopup.setEventListeners();

//* Open and close forms functions
profileEditBtn.addEventListener("click", () => {
  //* Get user data
  const userData = userInfo.getUserInfo();

  //* Pre-fill form with user data
  inputName.value = userData.name;
  inputJob.value = userData.job;

  //* Open popup
  formPopupAdder(editFormOpener);
  closePopupKey(editFormOpener);
  profilePopup.open();
});

addBtn.addEventListener("click", () => {
  formPopupAdder(addFormOpener);
  closePopupKey(addFormOpener);
  addCardPopup.open();
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

//* Close modal window
closeIcon.addEventListener("click", () => closeModalWindow(modal));
modal.addEventListener("click", () => closeModalWindow(modal));
