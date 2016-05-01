var Article = require('../../model/article');
var markdown = require( "markdown" ).markdown;

module.exports = function () {
    
    return function(req, res, next){
        Article.find().exec(function (err, articles) {
            if(err) console.log("Could not fetch articles");
            for(var i = 0; i < articles.length; i++){
                articles[i].text = markdown.toHTML(articles[i].text);
            }
            res.tpl.articles = articles;
            return next();
        });
    };

};
