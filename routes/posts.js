var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var db;
MongoClient.connect("mongodb://jacky:1234@ds231090.mlab.com:31090/pickup-teams", (err, client) => {
    if (err) return console.log(err, "error report")
    db = client.db('pickup-teams') // whatever your database name is
})

router.get('/', function(req, res) {
    db.collection('posts').find({}).sort({'_id': -1}).toArray((err, result) => {
        res.render('posts', {"chirps": result});
    });
})


module.exports = router;