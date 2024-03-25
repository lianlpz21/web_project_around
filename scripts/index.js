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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameOutput = inputName.value;
  let jobOutput = inputJob.value;
  profileName.textContent = nameOutput;
  profileJob.textContent = jobOutput;

  formPopupRemover();
}
form.addEventListener("submit", handleProfileFormSubmit);
