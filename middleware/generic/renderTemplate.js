module.exports = function (templateToRender) {

    //Render template in parameter
    return function (req, res) {
        res.render(templateToRender, res.tpl);
    }
    
};
