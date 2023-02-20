export class Section {
  constructor({ renderer }, containerId) {
    this._renderer = renderer;
    this._container = document.getElementById(containerId);
  }

  addItems(items) {
    items.forEach(item => {
      this._renderer(item);
    });
  };

  addItem(element) {
    this._container.append(element)
  };
}
