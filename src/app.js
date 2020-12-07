var express = require('express');
var cookie_parser = require('cookie-parser');
var app = express();
app.use(cookie_parser());

//Setting up a Cookie
app.get('/setcookie', function (req, res) {
    res.cookie('cookie_name', 'Express_Demo');
    res.cookie('organization', 'Edureka');
    res.cookie('name', 'Swatee');
    
    res.status(200).send('<h4 style="font-family: Tahoma; color: coral; text-align: center;">Setting up the Cookie</h4>');
});

//Checking cookie is set or not
app.get('/getcookie', function (req, res) {
    res.status(200).send(req.cookies);
});

//Welcome Message
app.get('/', function (req, res) {
    res.status(200).send('<h2 style="font-family: cursive; color: lightseagreen; text-align: center; ">Welcome to Edurekas Express Tutorial!</h2>');
});

module.exports = app;