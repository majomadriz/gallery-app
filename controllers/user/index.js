module.exports = {
    createUser: (req, res, next) => {
        res.send('creating user');
    },
    getUsers: (req, res, next) => {
        res.send('getting user');
    }
};