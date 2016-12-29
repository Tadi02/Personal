var moment = require('moment');

module.exports = function (templateToRender) {

    //Render template in parameter
    return function (req, res) {
        res.tpl.moment = moment;
        res.render(templateToRender, res.tpl);
    }
    
};
