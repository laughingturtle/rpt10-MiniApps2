const express = require('express');
const bodyParser = require('body-parser');
const jsonserver = require('../jsonserver/index.js');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'))
//app.get('/', (req, res) => res.send('express server running'));

app.listen(port, () => console.log(`App listening on port ${port}`));

// app.post('/data'/*add route */, function (req, res) {
//   let term = req.body.term;
//   console.log('search term on the server =', term)
//   jsonserver.get(`http://localhost:3010/events?q=${term}`, function(err, result){
//     if (err){
//       console.log('error in json server route', err);
//     } else{
//       console.log('result', result);
//       res.status(200).send(result.locals.data);
//     }
//   })
// })

