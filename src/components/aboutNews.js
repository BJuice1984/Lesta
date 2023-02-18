export class AboutNews {
  constructor(item, template) {
    this._name = item.siteName;
    this._link = item.siteLink;
    this._description = item.siteDescription;
    this._opinion = item.siteOpinion;
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
