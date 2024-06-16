export default class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const template = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card");
    return template.cloneNode(true);
  }

  _setEventListeners() {
    //* Like event
    this._card.querySelector(".card__like").addEventListener("click", () => {
      this._card.querySelector(".card__like").classList.toggle("card__liked");
    });

    //* Delete cards
    this._card.querySelector(".card__trash").addEventListener("click", () => {
      this._card.remove();
    });

    //* Open image after click
    this._card.querySelector(".card__image").addEventListener("click", () => {
      const modal = document.querySelector(".modal");
      const imageModal = modal.querySelector(".modal__image");
      const titleModal = modal.querySelector(".modal__title");
      imageModal.src = this._link;
      titleModal.textContent = this._name;
      modal.showModal();
    });
  }

  //* Generate initial cards
  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".card__image").src = this._link;
    this._card.querySelector(".card__image").alt = this._name;
    this._card.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
    return this._card;
  }
}
