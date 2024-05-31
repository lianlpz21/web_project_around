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
const closeIcon = document.querySelector(".modal__icon-close");

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

//! Closing after clicking outside the popups
overlay.addEventListener("click", (evt) => {
  formPopupRemover(editFormOpener);
  formPopupRemover(addFormOpener);
});

//* Sending personal info in form
editFormOpener.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let nameOutput = inputName.value;
  let jobOutput = inputJob.value;
  profileName.textContent = nameOutput;
  profileJob.textContent = jobOutput;

  formPopupRemover(editFormOpener);
});

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
  const likeBtn = copy.querySelector(".card__like");
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

  //* Get bigger image after clicking images added
  cardImage.addEventListener("click", () => {
    const imageModal = modal.querySelector(".modal__image");
    const titleModal = modal.querySelector(".modal__title");
    imageModal.src = cardImage.src;
    titleModal.textContent = cardTitle.textContent;
    modal.showModal();
  });

  //* Like button
  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("card__liked");
  });
});

//* Get bigger image after clicking images that already exist
const images = cards.querySelectorAll(".card__image");
const title = cards.querySelectorAll(".card__title");
const modal = document.querySelector(".modal");
images.forEach((image, index) => {
  image.addEventListener("click", () => {
    const imageModal = modal.querySelector(".modal__image");
    const titleModal = modal.querySelector(".modal__title");
    imageModal.src = image.src;
    titleModal.textContent = initialCards[index].name;
    modal.showModal();
  });
});

//* Close modal window
closeIcon.addEventListener("click", () => {
  modal.close();
});
modal.addEventListener("click", (evt) => {
  modal.close();
});

//! validate profile form
// const inputName = document.querySelector("#input__name");
// const inputJob = document.querySelector("#input__job");
const nameError = document.querySelector("#input__name-error");
inputName.addEventListener("click", () => {});
//*VALIDATE NAME
inputName.addEventListener("input", () => {
  const nameValue = inputName.value;
  const minLength = 2;
  if (nameValue.length < minLength) {
    nameError.classList.add("error-active");
    nameError.textContent = "Por favor, rellena este campo.";
  } else {
    nameError.classList.remove("error-active");
  }
  if (nameValue.length === 1) {
    nameError.classList.add("error-active");
    nameError.textContent = "El nombre debe tener al menos 2 carácteres.";
  }
});

//*VALIDATE JOB
const jobError = document.querySelector("#input__job-error");
inputJob.addEventListener("input", () => {
  const jobValue = inputJob.value;
  const minLength = 2;
  if (jobValue.length < minLength) {
    jobError.classList.add("error-active");
    jobError.textContent = "Por favor, rellena este campo.";
  } else {
    jobError.classList.remove("error-active");
  }
  if (jobValue.length === 2) {
    jobError.classList.add("error-active");
    jobError.textContent = "Su trabajo debe tener al menos 2 carácteres.";
  }
});
