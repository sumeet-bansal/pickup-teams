var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://Arnold:123456@ds231090.mlab.com:31090/pickup-teams', (err,client) => {
  if (err) return console.log(err);
  db = client.db('pickup-teams');
});

router.get('/profile/:name', (req, res) => {
  var name = req.params.name;
  db.collection('users').find({user_name: name}).toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('profile.hbs', result[0])
  });
});

module.exports = router;
