var db = require('../config/db');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

var Article = db.model('Article', {
    _id: ObjectId,
    title: String,
    seoFriendlyTitle: {
        type: String,
        unique: true
    },
    createdAt: String,
    text: String
});

module.exports = Article;

