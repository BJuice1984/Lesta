export class AboutNews {
  constructor(items, template) {
    this._name = items.siteName;
    this._link = items.siteLink;
    this._description = items.siteDescription;
    this._opinion = items.siteOpinion;
    this._template = template;
  }

render() {
  this._view = this._template.querySelector('.about-news__element').cloneNode(true);
  this._view.querySelector('.about-news__element-name').textContent = this._name;
  this._view.querySelector('.about-news__element-name').href = this._link;
  this._view.querySelector('.about-news__element-description').textContent = this._description;
  if (this._opinion) this._view.querySelector('.about-news__element-description_type_opinion').textContent = this._opinion;
  return this._view
};

}
