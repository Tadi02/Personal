var db = require('../config/db');
var ObjectId = require('mongoose').Schema.Types.ObjectId;

var Article = db.model('Article', {
    title: String,
    seoFriendlyTitle: {
        type: String,
        unique: true
    },
    createdAt: Number,
    text: String
});

module.exports = Article;

