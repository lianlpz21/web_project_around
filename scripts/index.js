import Card from "./Card.js";
// import FormValidator from "./FormValidator.js";
import { closeModalWindow, formPopupAdder, formPopupRemover } from "./utils.js";

// Selección de elementos del DOM
const profileEditBtn = document.querySelector(".profile__edit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const closeBtns = document.querySelectorAll(".popup__icon");
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

//* Open and close forms functions
profileEditBtn.addEventListener("click", () => formPopupAdder(editFormOpener));
addBtn.addEventListener("click", () => formPopupAdder(addFormOpener));

closeBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    formPopupRemover(editFormOpener);
    formPopupRemover(addFormOpener);
  })
);

overlay.addEventListener("click", () => {
  formPopupRemover(editFormOpener);
  formPopupRemover(addFormOpener);
});

editFormOpener.addEventListener("submit", (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  formPopupRemover(editFormOpener);
});

//* Initias cards data
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

//* Adding initial cards
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
