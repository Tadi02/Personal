var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/personal');

module.exports = mongoose;