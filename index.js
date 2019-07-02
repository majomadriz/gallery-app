const express = require('express');
const path = require('path');
const port = 8080;
var galleries = require('./mock/galleriesMock');

const folder = path.join(__dirname, 'public');

// Creating server
const app = express();
// Permite el uso de JSON como parámetros del POST
app.use(express.json());
app.use(express.static(folder));

// This is a custom middleware to log req.body of all requests
app.use(function(req, res, next) {
    console.log(req.body);
    next();
});

app.get('/galleries', function(req, res) {
    console.log(galleries);
    res.json(galleries);
});

app.get('*', function(req, res) {
    res.sendFile(path.join(folder, '404.html'));
});

app.use(function(req, res) {
    res.send(404);
});

app.listen(port, function() {
    console.log(`Servidor corriendo en puerto ${port}...`);
});