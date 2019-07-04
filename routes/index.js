const userRoutes = require("./user")();

var router = function(app) {
    app.use('/user', userRoutes);
};

module.exports = router;