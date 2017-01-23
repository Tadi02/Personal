var db = require('../config/db');

var Project = db.model('Project', {
    name: String,
    seoFriendlyName: {
        type: String,
        unique: true
    },
    time: String,
    description: String,
    tag: String
});

module.exports = Project;

