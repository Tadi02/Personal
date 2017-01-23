var Project = require('../../model/project');
var markdown = require( "markdown" ).markdown;

module.exports = function () {

    return function(req, res, next){
        Project.findOne({seoFriendlyName: req.params.name}).exec(function (err, project) {
            if(err) console.log("Could not find project: " + req.params.name);
            project.description = markdown.toHTML(project.description);
            res.tpl.project = project;
            return next();
        });
    };

};
