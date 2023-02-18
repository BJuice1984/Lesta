import './index.css';
import { Section } from '../components/Section.js';
import { Compare } from '../components/Compare.js';
import { Popup } from '../components/Popup';
import { compareIssues } from '../components/data.js';

const template = document.querySelector('.template').content;
const container = 'table';

const popupElementImage = new Popup('.popup_type_image');
popupElementImage.setEventListeners();

const handleCardClick = (link) => { popupElementImage.openPopup(link) };

function createNew(item, template) {
  const issue = new Compare(item, template, handleCardClick);
  const issueElement = issue.render();
  return issueElement
}

const issueElement = new Section({
  renderer: (issueItem) => {
    issueElement.addItem(createNew(issueItem, template));
  },
}, container
)

issueElement.addItems(compareIssues);




