import { URL } from './api.js';
import './news-article.js';

window.addEventListener('load', () => {
   await fetchNews();
});

async function fetchNews() {
    const res = await fetch(URL);
    const json = await res.json();
    
    const main = document.querySelector('main');
    
    json.articles.forEach(article => {
        const el = document.createElement('news-article');
        el.article = article;
        main.appendChild(el);
    });
}