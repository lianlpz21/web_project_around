import Popup from "./Popup.js";
import { formPopupRemover } from "./utils.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, firstInput, secondInput, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector(popupSelector);
    this._inputTitle = this._form.querySelector(firstInput);
    this._inputUrl = this._form.querySelector(secondInput);
    this._inputList = this._form.querySelectorAll("input");
    this._submitButton = this._form.querySelector(".popup__btn");
  }

  _getInputValues() {
    const inputValues = {
      [this._inputTitle.name]: this._inputTitle ? this._inputTitle.value : "",
      [this._inputUrl.name]: this._inputUrl ? this._inputUrl.value : "",
    };
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit({ ...this._getInputValues() });
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
