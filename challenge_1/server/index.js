const express = require('express');
const bodyParser = require('body-parser');
const jsonserver = require('../jsonserver/index.js');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'))


app.listen(port, () => console.log(`App listening on port ${port}`));



