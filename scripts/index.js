const popup = document.querySelector(".popup");
const profileEditBtn = document.querySelector(".profile__edit-btn");
const closeBtn = document.querySelector(".popup__icon");
const overlay = document.querySelector(".overlay");
const form = document.querySelector("#form");
const inputName = document.querySelector("#input__name");
const inputJob = document.querySelector("#input__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");
const saveBtn = document.querySelector(".popup__btn");

// const profileAddButton = document.querySelector(".profile__add-btn");

function formPopupAdder() {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
}

function formPopupRemover() {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
}

profileEditBtn.addEventListener("click", function () {
  formPopupAdder();
});

closeBtn.addEventListener("click", () => {
  formPopupRemover();
});

// profileAddButton.addEventListener("click", () => {
//   // console.log("click");
//   formPopupAdder();
// });

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameOutput = inputName.value;
  let jobOutput = inputJob.value;
  profileName.textContent = nameOutput;
  profileJob.textContent = jobOutput;

  formPopupRemover();
}
form.addEventListener("submit", handleProfileFormSubmit);

//* Initial cards in a array
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
const cards = document.querySelector(".cards");
const template = document.querySelector("#template").content;

initialCards.forEach((card) => {
  const copy = template.cloneNode(true);
  const cardImage = copy.querySelector(".card__image");
  const cardTitle = copy.querySelector(".card__title");
  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  cards.appendChild(copy);
});

//* Like button
const likeBtns = document.querySelectorAll(".card__like");
likeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("card__liked");
  });
});
