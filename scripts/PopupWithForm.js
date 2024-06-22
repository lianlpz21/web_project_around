export default class PopupWithForm extends Popup {
  constructor(callBack, popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
  }

  _getInputValue() {}

  setEventListeners() {}

  close() {}
}
