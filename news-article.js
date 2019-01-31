class NewsArticle extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    set article(article) {

        this.root.innerHTML = /*html*/`
            <style>
                a {
                    color: red !important;
                }
            </style>

            <a href="${article.url}">
                <h2>${article.title}</h2>
                <img src="${article.urlToImage || ''}"/>
                <p>${article.description || ''}</p>
            </a>
        `;
    }

}

customElements.define('news-article', NewsArticle);