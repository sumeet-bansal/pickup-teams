var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://Arnold:123456@ds231090.mlab.com:31090/pickup-teams', (err,client) => {
  if (err) return console.log(err);
  db = client.db('pickup-teams');
});

router.get('/', (req, res) => {
  //var name = req.params.name;
  var ObjectId = require('mongodb').ObjectID;
  db.collection('users').find({"_id" : new ObjectId("5b15e7215b79b4e368b50371")}).toArray(function(err, result) {
    if (err) return console.log(err);
    res.render('profile.hbs', result[0])
  });
});

module.exports = router;
