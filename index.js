var express = require('express');
var app = express(); //instant gọi 1 app instant -> 1 design pattern
var port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')
app.get('/', function(request, response) {
    response.render('index', {
        name: "QuynhQuynh"
    });
});

app.get('/user', function(req, res) {
    res.render('user/index', {
        users:[
        { id: 1, name: 'Tu'},
        { id: 2, name:'Anh'}
        ]
    });
})

app.listen(port, function () {
    console.log('port' + port);
})