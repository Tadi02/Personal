var fetchProjects = require("../middleware/project/fetchProjects");
var fetchProject = require("../middleware/project/fetchProject");
var addProject = require("../middleware/project/addProject");
var renderTemplate = require("../middleware/generic/renderTemplate");
var bodyParser = require('body-parser');

module.exports = function (app) {

    app.use('/projects/list',
        fetchProjects(),
        renderTemplate("projects")
    );

    app.use('/projects/add',
        bodyParser.urlencoded({extended: true}),
        addProject(),
        renderTemplate("addProject")
    );

    app.use('/projects/detail/:name',
        fetchProject(),
        renderTemplate("projectDetail")
    );


};