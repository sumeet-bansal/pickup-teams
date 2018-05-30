var express = require('express');
var router = express.Router();
const fs = require('fs');


const MongoClient = require('mongodb').MongoClient

var db;
MongoClient.connect("mongodb://jacky:1234@ds231090.mlab.com:31090/pickup-teams", (err, client) => {
    if (err) return console.log(err, "error report")
    db = client.db('pickup-teams') // whatever your database name is
})

router.get('/', function(req, res, next) {
    res.render('add'); // renders /views/about.hbs
});


router.post('/', (req, res) => {
    var tweet = req.body;
    console.log(tweet)
    db.collection('posts').save(tweet, (err, result) => {
        if (err) return console.log(err, "error in saving")
        console.log('saved to database')
        res.redirect('/')
    })
})

module.exports = router;