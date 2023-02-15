import './index.css';
import { Section } from '../components/Section.js';
import { AboutNews } from '../components/aboutNews.js';
import { gamesSites, gameNews } from '../components/data';

const gameTemplate = document.getElementById('template-game').content;
const newsTemplate = document.getElementById('template-news').content;
const gameContainer = 'game';
const newsContainer = 'news';

function createNew(item, template) {
  const news = new AboutNews(item, template);
  const newsElement = news.render();
  return newsElement
}

const gameElement = new Section({
  renderer: (newsItem) => {
    gameElement.addItem(createNew(newsItem, gameTemplate));
  },
}, gameContainer
)

gameElement.addItems(gamesSites);

const newsElement = new Section({
  renderer: (newsItem) => {
    newsElement.addItem(createNew(newsItem, newsTemplate));
  },
}, newsContainer
)

newsElement.addItems(gameNews);

