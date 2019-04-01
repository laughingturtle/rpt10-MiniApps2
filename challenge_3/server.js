const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3028;

app.use(express.static(__dirname + '/public/'));

// app.get('/', function(req, res){
//   res.send('helloooo world');
// });

app.get('/savescores', function(req, res){
 //send stats to mongo
 console.log('req: ', req);

 console.log('res: ', res);
 res.status(200).send(res);
});

app.get('/getscores', function(req, res){
  //send stats to client
  console.log('req: ', req);

  console.log('res: ', res);
  res.status(200).send(res);
 });

app.listen(port, () => console.log(`Listening on port: ${port}`));



