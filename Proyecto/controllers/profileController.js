
var data = require("../data/db");

const controller = {
    profile: function(req, res) {
        res.render('profile',
        { usuario: data.usuario,
            data : data}
        );
    },
    edit: function(req, res) {
        res.render('profile-edit');
    },
}

module.exports = controller;