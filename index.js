var express = require('express');
var app = express(); //instant gọi 1 app instant -> 1 design pattern
var port = 3000;

app.set('views', './views')
app.set('view engine', 'pug')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json');
var db = low(adapter);

//set default
db.defaults({ users: [] })
  .write();

app.get('/', function(request, response) {
    response.render('index', {
        name: "QuynhQuynh"
    });
});

app.get('/user', function(req, res) {
    res.render('user/index', {
        users: db.get('users').value()
    });
})

app.get('/user/search', function(req, res) {
    var q = req.query.q;   
    // var matchUsers = arr.filter(function(user) {
    //     return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    // });
    res.render('user/index',{
        users: db.get('posts').find({ name: q }).value()
    });
});

app.get('/user/creat', function(req, res) {
    res.render('user/creat');
});

app.post('/user/creat', function(req, res) {
    db.get('users').push(req.body).write();
    res.redirect('/user');
})


app.listen(port, function () {
    console.log('port' + port);
})