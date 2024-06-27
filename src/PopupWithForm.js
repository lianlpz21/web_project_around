import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(".popup__container form");
    this._inputList = this._form
      ? this._form.querySelectorAll(".popup__input")
      : [];
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    if (this._form) {
      this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
      });
    }

    const closeIcon = this._popup.querySelector(".modal__icon-close");
    if (closeIcon) {
      closeIcon.addEventListener("click", () => {
        this.close();
      });
    }
  }

  close() {
    super.close();
    if (this._form) {
      this._form.reset();
    }
  }
}
