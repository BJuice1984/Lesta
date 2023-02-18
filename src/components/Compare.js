export class Compare {
  constructor(item, template) {
    this._description = item.issueDescription;
    this._evaluation = item.issueEvaluation;
    this._template = template;
  }

  render() {
    this._view = this._template.getElementById('table-template').cloneNode(true);
    this._view.querySelector('.patch-notes__table-body').textContent = this._description;
    if (this._evaluation === 'good') {
      this._view.querySelector('.patch-notes__table-image_type_bad').remove();
      this._view.querySelector('.patch-notes__table-image_type_bug').remove();
    }
    if (this._evaluation === 'bad') {
      this._view.querySelector('.patch-notes__table-image_type_good').remove();
      this._view.querySelector('.patch-notes__table-image_type_bug').remove();
    }
    if (this._evaluation === 'img') {
      this._view.querySelector('.patch-notes__table-image_type_good').remove();
      this._view.querySelector('.patch-notes__table-image_type_bad').remove();
    }
    return this._view
  };
}
