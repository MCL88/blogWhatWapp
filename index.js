const express = require("express");
const app = express();

//Importo gli articoli salvati in memoria
const ARTICLES = require("./mock/mock-article");

const path = require("path");


let port = 3000;
let article = ARTICLES[0];

//Express si occupa dei file statici come il file index.html
app.use(express.static(__dirname + "/client/dist/index.html"));

app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname + "/client/dist/index.html"));
});

app.listen(port, () => {
    console.log("Server in ascolto sulla porta " + port);
    console.log(article.date.toString());
});