import './index.css';
import { AboutGame } from '../components/AboutGame.js';
import { Section } from '../components/Section.js';
import { aboutGameFix } from '../components/data.js';

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, obj) => {
    const key = obj[property];
    const curGroup = acc[key] ?? [];

    return { ...acc, [key]: [...curGroup, obj] };
  }, {});
}

const groupedAboutGameFix = groupBy(aboutGameFix, "elementName");

const template = document.querySelector('.template').content;
const burgerMenuContainer = 'burgerMenu';
const burgerMenuAccountContainer = 'burgerMenuAccount';
const mainContainer = 'main';

function createNew(item, template) {
  const news = new AboutGame(item, template);
  const newsElement = news.render();
  return newsElement
}

const burgerMenuElement = new Section({
  renderer: (item) => {
    burgerMenuElement.addItem(createNew(item, template));
  },
}, burgerMenuContainer
)

burgerMenuElement.addItems(groupedAboutGameFix.burgerMenu);

const burgerMenuAccountElement = new Section({
  renderer: (item) => {
    burgerMenuAccountElement.addItem(createNew(item, template));
  },
}, burgerMenuAccountContainer
)

burgerMenuAccountElement.addItems(groupedAboutGameFix.burgerMenuAccount);

const mainElement = new Section({
  renderer: (item) => {
    mainElement.addItem(createNew(item, template));
  },
}, mainContainer
)

mainElement.addItems(groupedAboutGameFix.main);


