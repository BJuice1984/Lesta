export class AboutGame {
  constructor(item, template) {
    this._name = item.elementName;
    this._problem = item.elementProblem;
    this._fix = item.elementFix;
    this._template = template;
  }

  render() {
    this._view = this._template.querySelector('.about-game__element').cloneNode(true);
    this._view.querySelector('.about-game__element-name').textContent = this._problem;
    this._view.querySelector('.about-game__element-description').textContent = this._fix;
    return this._view
  };

}
