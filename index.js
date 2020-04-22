var express = require('express');
var app = express(); //instant gọi 1 app instant -> 1 design pattern
var port = 3000;
var db = require('./db');
var userRouters = require('./routers/user.routers');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(request, response) {
    response.render('index', {
        name: "QuynhQuynh"
    });
});

app.use('/user', userRouters);
app.listen(port, function () {
    console.log('port' + port);
})