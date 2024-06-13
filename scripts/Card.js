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

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__title").textContent = this._name;
    this._setEventListeners();
    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector(".card__like").addEventListener("click", () => {
      this._element
        .querySelector(".card__like")
        .classList.toggle("card__liked");
    });

    this._element
      .querySelector(".card__trash")
      .addEventListener("click", () => {
        this._element.remove();
      });

    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const imageModal = modal.querySelector(".modal__image");
        const titleModal = modal.querySelector(".modal__title");
        imageModal.src = this._link;
        titleModal.textContent = this._name;
        modal.showModal();
      });
  }
}
