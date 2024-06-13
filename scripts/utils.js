const overlay = document.querySelector(".overlay");
export function formPopupAdder(formElement) {
  formElement.classList.add("popup_opened");
  overlay.classList.add("overlay_opened");
}

export function formPopupRemover(formElement) {
  formElement.classList.remove("popup_opened");
  overlay.classList.remove("overlay_opened");
}

export function closeModalWindow(modal) {
  modal.close();
}
