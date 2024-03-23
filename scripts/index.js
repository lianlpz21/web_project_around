const popup = document.querySelector(".popup");
const popupOpen = document.querySelector(".profile__edit-btn");
const popupClose = document.querySelector(".popup__icon");
const overlay = document.querySelector(".overlay");

const form = document.querySelector("#form");
const inputName = document.querySelector("#input__name");
const inputJob = document.querySelector("#input__job");
const profileName = document.querySelector(".profile__name");
const jobName = document.querySelector(".profile__occupation");

popupOpen.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
});

popupClose.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
});

const btn = document.querySelector(".popup__btn");

btn.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameOutput = inputName.value;
  let jobOutput = inputJob.value;
  profileName.textContent = nameOutput;
  jobName.textContent = jobOutput;
}
form.addEventListener("submit", handleProfileFormSubmit);
