//mock-article.js -- file che imita un database

//Recupero la classe Article presente nel file article.js
Article = require("../model/article");


const ARTICLES  =
[
    new Article(1,"Titolo 1", "Miccel", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem ipsa enim fuga eius provident, quaerat officiis, dicta, architecto illum at voluptate hic aspernatur! Alias repudiandae veniam libero perspiciatis neque?"),
    new Article(2,"Titolo 2", "Miccel", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti rem ipsa enim fuga eius provident, quaerat officiis, dicta, architecto illum at voluptate hic aspernatur! Alias repudiandae veniam libero perspiciatis neque?")
];

module.exports = ARTICLES;