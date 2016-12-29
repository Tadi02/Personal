var Article = require('../../model/article');
var markdown = require( "markdown" ).markdown;

module.exports = function () {

    return function(req, res, next){
        Article.findOne({seoFriendlyTitle: req.params.title}).exec(function (err, article) {
            if(err) console.log("Could not find article: " + req.params.title);
            article.text = markdown.toHTML(article.text);
            res.tpl.article = article;
            return next();
        });
    };

};
