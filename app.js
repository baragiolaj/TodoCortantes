var express = require('express');
var app = express();
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');
});

app.get('/contacto', function(req, res) {
    res.render('pages/contacto');
});

app.get('/carrito', function(req, res) {
    res.render('pages/carrito');
});

app.get('/newsletter', function(req, res) {
    res.render('pages/newsletter');
});
app.get('/products', function(req, res) {
    res.render('pages/products');
});

app.listen(3000);
console.log ('anda todo')