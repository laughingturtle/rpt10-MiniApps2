const express = require('express');
const app = express();
const port = 3028;

app.use(express.static(__dirname + '/public/'));

// app.get('/', function(req, res){
//   res.send('helloooo world');
// });

app.listen(port, () => console.log(`Listening on port: ${port}`));



