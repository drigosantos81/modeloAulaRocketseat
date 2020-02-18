const express = require('express');
const nunjucks = require('nunjucks');
const videos = require("./data");

const server = express();

server.use(express.static('public'));

server.set("view engine", "njk");

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const data = {
        avatar_url: "https://avatars3.githubusercontent.com/u/52610125?s=460&v=4",
        name: "Rodrigo Emanuel",
        role: "Estudante - Rocketseat",
        description: "Estudante nível Noob... na <a href='https://rocketseat.com.br' target='_blank'>Rocketseat</a> tentando forçar a natureza para aprender programação Web!",
        links: [
            { name: "Github", url: "https://github.com/drigosantos81" },
            { name: "Twitter", url: "https://twitter.com/drigosantos" },
            { name: "Linkedin", url: "https://www.linkedin.com/in/rodrigo-emanuel-8505b420/"}
        ]
    }

    return res.render("about", { data: data });
});

server.get("/portifolio", function(req, res) {
    return res.render("portifolio", { items: videos });
});

server.listen(5000, function() {
    console.log("Server ir runnig");
});