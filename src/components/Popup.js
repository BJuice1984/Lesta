export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closePopupByEsc = this._closePopupByEsc.bind(this);
    this._currentPopupName = this._popup.querySelector('.popup__content_type_name');
    this._currentPopupLink = this._popup.querySelector('.popup__content_type_image');
  }

  openPopup(link) {
    this._currentPopupLink.src = link;
    this._currentPopupLink.alt = 'Изображение загружется либо недоступно';
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closePopupByEsc);
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closePopupByEsc);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.closePopup();
      }
      if (evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      }
    })
  }

  _closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      this.closePopup();
    }
  }
}
