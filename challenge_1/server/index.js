const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'))
//app.get('/', (req, res) => res.send('express server running'));

// route or routes for querying json-server
app.post('/'/*add route */, function (req, res) {
  //res.send('GET request to the homepage');
})

app.listen(port, () => console.log(`App listening on port ${port}!`));
