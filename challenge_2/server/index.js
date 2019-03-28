const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use(express.static(__dirname + '/../public/'))

// app.get('/', function(req, res){
//   res.send('helloooo world');
// });

app.listen(port, () => console.log(`App is running on ${port}!`));



