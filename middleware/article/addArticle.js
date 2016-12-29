var Article = require('../../model/article');
var getSlug = require('speakingurl');

module.exports = function () {

    return function (req, res, next) {
        if ((typeof req.body.title === 'undefined') || (req.body.title.length == 0)) {
            return next();
        }

        var seoTitle = getSlug(req.body.title, {lang: 'hu'});
        Article.find({seoFriendlyTitle: new RegExp(seoTitle + '\d*')}).exec(function (err, articlesWithSameTitle) {
            if(articlesWithSameTitle.length > 0){
                seoTitle += articlesWithSameTitle.length + 1;
            }
            var article = new Article({
                title: req.body.title,
                text: req.body.text,
                seoFriendlyTitle: seoTitle,
                createdAt: Date.now()
            });

            article.save(function (err) {
                if (err) console.log("Could not save article. - " + err);
                return next();
            });

        });
    };

};