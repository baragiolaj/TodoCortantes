var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/categorias', function(req, res) {
    res.render('pages/categorias');
});

app.get('/contacto', function(req, res) {
    res.render('pages/contacto');
});

app.get('/carrito', function(req, res) {
    res.render('pages/carrito');
});


app.listen(3000);