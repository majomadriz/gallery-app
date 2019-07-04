const express = require('express');
const router = express.Router();
const { createUser, getUsers } = require('../../controllers/user');

var routes = function() {

    router.post('/', function(req, res, next) {
        createUser(req, res, next);
    });

    router.get('/', function(req, res, next) {
        getUsers(req, res, next);
    });

    return router;
};

module.exports = routes;