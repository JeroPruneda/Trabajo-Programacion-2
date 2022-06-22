var db = require("../database/models");
var op = db.Sequelize.Op;

const controller = {
    search: function (req, res) {
        db.zapas.findAll({
            where: {
                [op.or]: [
                    {marca: {[op.like]: "%"+req.query.criteria+"%"}},
                    {modelo: {[op.like]: "%"+req.query.criteria+"%"}},
                    {descripcion: {[op.like]: "%"+req.query.criteria+"%"}},
                ]
            },
            include: [{association: "user"}],
            order: [["createdAt", "DESC"]]
        })
        .then(function (productos) {
            res.render("search-results", {productos});
        })
        .catch (function (error) {
            res.send(error)
        });
    },
};

module.exports = controller;