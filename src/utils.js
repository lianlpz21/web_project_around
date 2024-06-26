export const initialCards = [
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

export function formPopupAdder() {
  const overlay = document.querySelector(".overlay");
  overlay.classList.add("overlay_opened");
}

export function formPopupRemover(formElement) {
  formElement.classList.remove("popup_opened");
  const overlay = document.querySelector(".overlay");
  overlay.classList.remove("overlay_opened");
}

export function closeModalWindow(modal) {
  modal.close();
}

export function closePopupKey(form) {
  const handleEscapeKey = (evt) => {
    if (evt.key === "Escape" || evt.key === "Esc") {
      formPopupRemover(form);
      document.removeEventListener("keydown", handleEscapeKey);
    }
  };
  document.addEventListener("keydown", handleEscapeKey);
}
