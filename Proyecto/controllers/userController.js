
var data = require("../data/db");

const controller = {
    me: function(req, res) {
        res.render('profile');
    },
    edit: function(req, res) {
        res.render('profile-edit');
    }
}

module.exports = controller;