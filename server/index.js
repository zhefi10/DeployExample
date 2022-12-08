const express   = require('express');
const app       = express();
const cors      = require('cors');
var dal         = require('./dal.js');
require('dotenv').config();

app.use(cors());
app.get('/account/create/:name/:email/:password/:balance', function (req,res){
    dal.create(req.params.name, req.params.email, req.params.password, req.params.balance)
    .then((user) => {
        console.log(user);
        res.send(user);
    });
});

app.get('/account/all', function(req, res){
    dal.all()
    .then((info) => {
        console.log(info);
        res.send(info);
    });
});

app.get('/account/deposit/:email/:balance', function(req, res){
    dal.deposit(req.params.email, req.params.balance)
    .then((info) => {
        console.log(info);
        res.send(info);
    });
});

app.get('/account/withdraw/:email/:balance', function(req, res){
    dal.withdraw(req.params.email, req.params.balance)
    .then((info) => {
        console.log(info);
        res.send(info);
    });
});

app.get('/account/login/:email/:password', function (req, res){
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});


app.get('/account/login/:email/:password', function (req, res){
    res.send({
        email:      req.params.email,
        password:   req.params.password
    });
});

app.get('/account/balance/:email', function (req, res){
    dal.balance(req.params.email)
    .then((balanceActual) => {
        console.log(balanceActual);
        res.send(balanceActual);
    });
});

var port = 3001;
app.listen(port);
console.log('Running on port: ' + port);