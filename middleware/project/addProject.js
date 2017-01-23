var Project = require('../../model/project');
var getSlug = require('speakingurl');

module.exports = function () {

    return function (req, res, next) {
        if ((typeof req.body.name === 'undefined') || (req.body.name.length == 0)) {
            return next();
        }

        var seoTitle = getSlug(req.body.name, {lang: 'hu'});
        Project.find({seoFriendlyName: new RegExp(seoTitle + '\d*')}).exec(function (err, projectsWithSameTitle) {
            if(projectsWithSameTitle.length > 0){
                seoTitle += projectsWithSameTitle.length + 1;
            }
            var project = new Project({
                name: req.body.name,
                seoFriendlyName: seoTitle,
                time: req.body.time,
                description: req.body.description,
                tag: req.body.tag
            });

            project.save(function (err) {
                if (err) console.log("Could not save project. - " + err);
                return next();
            });

        });
    };

};