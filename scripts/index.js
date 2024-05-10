// const popup = document.querySelector(".popup");
const profileEditBtn = document.querySelector(".profile__edit-btn");
const addBtn = document.querySelector(".profile__add-btn");
const closeBtn = document.querySelectorAll(".popup__icon");

const editFormOpener = document.querySelector("#form__edit-opener");
const addFormOpener = document.querySelector("#form__add-cards-opener");

const overlay = document.querySelector(".overlay");
const inputName = document.querySelector("#input__name");
const inputJob = document.querySelector("#input__job");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__occupation");
const saveBtn = document.querySelector(".popup__btn");

function formPopupAdder(popup) {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
}

function formPopupRemover(popup) {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
}

profileEditBtn.addEventListener("click", function () {
  formPopupAdder(editFormOpener);
});

addBtn.addEventListener("click", () => {
  formPopupAdder(addFormOpener);
});

closeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formPopupRemover(editFormOpener);
    formPopupRemover(addFormOpener);
  });
});

//* Sending personal info in form
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameOutput = inputName.value;
  let jobOutput = inputJob.value;
  profileName.textContent = nameOutput;
  profileJob.textContent = jobOutput;

  if (nameOutput === "" && jobOutput === "") {
    profileName.textContent = "Jacques Cousteau";
    profileJob.textContent = "Explorador";
  }

  formPopupRemover(editFormOpener);
}
editFormOpener.addEventListener("submit", handleProfileFormSubmit);

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

//* Adding initial cards and like button
const cards = document.querySelector(".cards");
const template = document.querySelector("#template").content;

initialCards.forEach((card) => {
  const copy = template.cloneNode(true);
  const cardImage = copy.querySelector(".card__image");
  const cardTitle = copy.querySelector(".card__title");
  const likeBtn = copy.querySelector(".card__like");
  cardImage.src = card.link;
  cardTitle.textContent = card.name;

  //* Like button
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__liked");
  });

  //* Delete button
  const deleteCardBtn = copy.querySelector(".card__trash");
  deleteCardBtn.addEventListener("click", () => {
    deleteCardBtn.parentElement.remove();
  });

  //* Bigger image

  cards.appendChild(copy);
});

//* Adding new cards sended by form
addFormOpener.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const copy = template.cloneNode(true);
  const cardImage = copy.querySelector(".card__image");
  const cardTitle = copy.querySelector(".card__title");
  const inputImage = document.querySelector("#input__image");
  const inputTitle = document.querySelector("#input__title");
  cardImage.src = inputImage.value;
  cardTitle.textContent = inputTitle.value;

  formPopupRemover(addFormOpener);

  const deleteCardBtn = copy.querySelector(".card__trash");
  deleteCardBtn.addEventListener("click", () => {
    deleteCardBtn.parentElement.remove();
  });

  cards.appendChild(copy);

  inputTitle.value = "";
  inputImage.value = "";
});

//* Get bigger image after clicking
// const card = document.querySelectorAll(".card");
// const modal = document.querySelector("#modal");
// const modalImage = modal.querySelector(".modal__image");

// card.forEach((card) => {
//   card.addEventListener("click", (evt) => {
//     const clickedImage = evt.currentTarget;
//     const image = clickedImage.querySelector(".card__image");
//     const copy = template.cloneNode(true);
//     const cardImage = copy.querySelector(".card__image");
//     const openModal = modal.show(copy);

//     clickedImage.value = cardImage.src;
//     modal.appendChild(copy);
//   });
// });
