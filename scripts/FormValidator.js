export default class FormValidator {
  constructor(formElements, settings) {
    this._formElements = formElements;
    this._settings = settings;
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(btnElement, inputs) {
    if (this._hasInvalidInput(inputs)) {
      btnElement.classList.add(this._settings.inactiveButtonClass);
    } else {
      btnElement.classList.remove(this._settings.inactiveButtonClass);
    }
  }

  _showInputError(inputElement, errorMessage, formElement) {
    // this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._settings.inputErrorClass);
    // this._errorElement.textContent = errorMessage;
  }

  _hideInputError(inputElement, formElement) {
    // this._errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._settings.inputErrorClass);
    // this._errorElement.textContent = "";
  }

  _checkInputValidity(inputElement, formElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(
        inputElement,
        inputElement.validationMessage,
        formElement
      );
    } else {
      this._hideInputError(inputElement, formElement);
    }
  }

  _setEventListeners(formElement) {
    let inputs = Array.from(
      formElement.querySelectorAll(this._settings.inputSelector)
    );
    let btnElement = formElement.querySelector(
      this._settings.submitButtonSelector
    );
    console.log(this._settings.submitButtonSelector);
    this._toggleButtonState(btnElement, inputs);

    inputs.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(inputElement, formElement);
        this._toggleButtonState(btnElement, inputs);
      });
    });
  }

  enableValidation() {
    this._formElements.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  }
}
