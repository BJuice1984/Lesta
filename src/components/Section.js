export class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.getElementById(containerSelector);
  }

  addItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.prepend(element)
  };
}
