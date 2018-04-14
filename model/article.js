//article.js -- La classe che definisce un articolo

//Definisco il modello Article
class Article {

    constructor(id, title, author, content)
    {
        this.id = id;
        this.title = title;
        this.author = author;
        this.date = new Date();
        this.content = content
    }
} 

module.exports = Article;