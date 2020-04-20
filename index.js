var express = require('express');
var app = express(); //instant gọi 1 app instant -> 1 design pattern
var port = 3000;

app.get('/', function(request, response) {
    response.send('<h1>hello Phong</h1>');
});

app.get('/user', function(req, res) {
    res.send('User');
})

app.listen(port, function () {
    console.log('aaaaa port' + port);
})