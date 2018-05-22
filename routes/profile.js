var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://<dbuser>:<dbpassword>@ds231090.mlab.com:31090/pickup-teams', (err,client) => {
  if (err) return console.log(err);
  db = client.db('pickup-teams');
});

router.get('/profile', (req, res) => {
  db.collection('users').find().toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('index.hbs', result[0])
  });
});

module.exports = router;
