var Project = require('../../model/project');
var markdown = require( "markdown" ).markdown;

module.exports = function () {
    
    return function(req, res, next){
        Project.find().exec(function (err, projects) {
            if(err) console.log("Could not fetch projects");
            for(var i = 0; i < projects.length; i++){
                projects[i].description = markdown.toHTML(projects[i].description);
            }
            res.tpl.projects = projects;
            return next();
        });
    };

};
