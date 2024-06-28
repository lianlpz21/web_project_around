import Popup from "./Popup.js";
import { formPopupRemover } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__container").closest("form");
    this._inputTitle = this._form.querySelector("#input__title");
    this._inputUrl = this._form.querySelector("#input__url");
    this._inputList = this._form.querySelectorAll(".popup__input-cards");
    this._submitButton = this._form.querySelector(".popup__btn");
  }

  _getInputValues() {
    const inputValues = {
      name: this._inputTitle.value,
      link: this._inputUrl.value,
    };
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const { name, link } = this._getInputValues();

      this._handleFormSubmit({ name, link });
      this.close();
    });

    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        if (this._form.checkValidity()) {
          this._submitButton.removeAttribute("disabled");
        } else {
          this._submitButton.setAttribute("disabled", true);
        }
      });
    });

    const closeIcon = this._popup.querySelector(".popup__icon");
    if (closeIcon) {
      closeIcon.addEventListener("click", () => {
        this.close();
      });
    }
  }

  close() {
    super.close();
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove("overlay_opened");
    this._form.reset();
    this._submitButton.setAttribute("disabled", true);
  }
}
