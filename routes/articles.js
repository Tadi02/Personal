var fetchArticles = require("../middleware/article/fetchArticles");
var renderTemplate = require("../middleware/generic/renderTemplate");

module.exports = function (app) {

    app.use('/articles',
        fetchArticles(),
        renderTemplate("articles")
    );

};