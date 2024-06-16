//! validate profile form
const nameError = document.querySelector("#input__name-error");
const isNameValid = inputName.value.length >= 2;
const isJobValid = inputName.value.length >= 2;

function validateProfile() {
  const isNameValid = inputName.value.length >= 2;
  const isJobValid = inputJob.value.length >= 2;

  if (isNameValid && isJobValid) {
    saveBtn.classList.add("popup__btn-active");
    saveBtn.disabled = false;
  } else {
    saveBtn.classList.remove("popup__btn-active");
    saveBtn.disabled = true;
  }
}
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
  validateProfile();
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
    saveBtn.classList.add("popup__btn-active");
  }
  if (jobValue.length === 1) {
    jobError.classList.add("error-active");
    jobError.textContent = "Su trabajo debe tener al menos 2 carácteres.";
  }
  validateProfile();
});

//! Validate add cards form
const titleError = document.querySelector("#input__title-error");
const urlError = document.querySelector("#input__url-error");
const addCardBtn = document.querySelector(
  "#form__add-cards-opener .popup__btn"
);

function validateAddCardForm() {
  const isTitleValid = inputTitle.value.length >= 2;
  const isUrlValid = inputImage.validity.valid;

  if (isTitleValid && isUrlValid) {
    addCardBtn.classList.add("popup__btn-active");
    addCardBtn.disabled = false;
  } else {
    addCardBtn.classList.remove("popup__btn-active");
    addCardBtn.disabled = true;
  }
}

//*VALIDATE TITLE
inputTitle.addEventListener("input", () => {
  const titleValue = inputTitle.value;
  const minLength = 2;
  if (titleValue.length < minLength) {
    titleError.classList.add("error-active");
    titleError.textContent = "Por favor, rellena este campo.";
  } else {
    titleError.classList.remove("error-active");
  }
  if (titleValue.length === 1) {
    titleError.classList.add("error-active");
    titleError.textContent = "El título debe tener al menos 2 carácteres.";
  }
  validateAddCardForm();
});

//*VALIDATE URL
inputImage.addEventListener("input", () => {
  if (!inputImage.validity.valid) {
    urlError.classList.add("error-active");
    urlError.textContent = "Por favor, ingrese una URL válida.";
  } else {
    urlError.classList.remove("error-active");
    addCardBtn.classList.add("popup__btn-active");
  }
  validateAddCardForm();
});
