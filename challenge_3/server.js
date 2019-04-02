const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/index.js')
const app = express();
const port = 3028;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public/'));

app.post('/savescores', function(req, res){
  console.log('**** // reqs on the server: ', req.body);
  db.create({
    score: req.body.score
    }, null, { limit: 30 }, function(err, result){
      if (err){
        console.log('error inserting - server ', err);
        res.status(400).send('error inserting - server')
      } else {
        console.log('insert successful: ');
        res.status(200).send('insert successful');
      }
    }
  )
});

app.get('/getscores', function(req, res){
  db.find({}, function(err, result){
    if (err){
      console.log('error getting records - server ', err);
      res.status(400).send('error getting records - server')
    } else {
      console.log('results: ', result);
      res.status(200).send(result);
    }
  })
 });

app.listen(port, () => console.log(`Listening on port: ${port}`));



