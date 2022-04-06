
var data = require("../data/db");

const controller = {
    profile: function(req, res) {
        res.render('profile');
    },
    edit: function(req, res) {
        res.render('profile-edit');
    },

    // register: function(req, res) {
    //     res.render('index');
    // }
}

module.exports = controller;