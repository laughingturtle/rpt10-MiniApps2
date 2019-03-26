const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'))

//app.get('/', (req, res) => res.send('Dude, I\'m your express server'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
