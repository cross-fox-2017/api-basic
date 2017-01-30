const model = require('../models')


module.exports = {

    getAllUser : function(req, res) {

        // req.query.username

        res.send("People index page test");
    },


    getSingleUser : function(req, res) {
        res.send("People index page post method test");
    },


    create_user : function(req, res) {
        res.send("People finest subsection test");
    },


    delete_user : function(req, res, id) {
        res.send("You are requesting the resource with id: " + id);
    },


    update_user : function(req, res, id) {
        res.send("You are requesting the friends of the person with id: " + id);
    }
}
