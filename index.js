import { fetchNews } from './api.js';
import './news-article.js';

window.addEventListener('load', () => {
   renderNews();
});

const renderNews = async () => {
    const main = document.querySelector('main');

    const json = await fetchNews();
    
    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}