var Article = require('../../model/article');
var getSlug = require('speakingurl');

module.exports = function () {

    //Adds a new article to the db
    return function (req, res, next) {
        //Parameter missing or empty
        if ((typeof req.body.title === 'undefined') || (req.body.title.length == 0)) {
            return next();
        }

        //Save new article
        var seoTitle = getSlug(req.body.title, {lang: 'hu'});
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
    };

};