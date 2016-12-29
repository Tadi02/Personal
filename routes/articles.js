var fetchArticles = require("../middleware/article/fetchArticles");
var fetchArticle = require("../middleware/article/fetchArticle");
var addArticle = require("../middleware/article/addArticle");
var renderTemplate = require("../middleware/generic/renderTemplate");
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use('/articles/list',
        fetchArticles(),
        renderTemplate("articles")
    );

    app.use('/articles/add',
        bodyParser.urlencoded({extended: true}),
        addArticle(),
        renderTemplate("addArticle")
    );

    app.use('/articles/detail/:title',
        fetchArticle(),
        renderTemplate("articleDetail")
    );


};