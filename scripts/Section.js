export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this.containerSelector = document.querySelector(containerSelector);
  }
  renderer() {}

  addItem() {}
}
