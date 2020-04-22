var express = require('express');
var db = require('../db');
var shortid = require('shortid');

var router = express.Router();



router.get('/', function(req, res) {
    res.render('user/index', {
        users: db.get('users').value()
    });
})
router.get('/search', function(req, res) {
    var q = req.query.q;
    var arr = db.get('users').value();   
    var matchUsers = arr.filter(function(user) {
       return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('user/index',{
        users: matchUsers
    });
});
router.get('/creat', function(req, res) {
    res.render('user/creat');
});
router.post('/creat', function(req, res) {
    req.body.id = shortid.generate();
    db.get('users').push(req.body).write();
    res.redirect('/user');
})

router.get('/view', function(req, res) {
    res.render('user/view');
});

router.get('/:id', function(req, res) {
    var id = req.params.id;
    var user = db.get('users').find({ id: id }).value();

    res.render('user/view', {
        user: user
    }); 
});

module.exports = router;