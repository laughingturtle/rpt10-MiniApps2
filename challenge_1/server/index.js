const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
var util = require('util');
var cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../public/'))

var per_page = 10;
var items;
var offset = 0;
var per_page = 10;

function getPaginatedItems(items, offset) {
   //console.log('**items: ', items);
   return items.slice(offset, offset + per_page);
 }

app.get('/historicaldata', function(req, res) {
  console.log('req query', req.query);
  console.log('req query limit', JSON.parse(req.query.data).limit); // get the correct path to 'limit'
  console.log('req query offset', JSON.parse(req.query.data).offset); // get the correct path to 'offset'
  axios.get('http://localhost:3010/events', {
    params: {
      q: req.query.q,
      data:{limit:JSON.parse(req.query.data).limit, offset:JSON.parse(req.query.data).offset}
    }
  })
  .then(function (response) {
    items = response.data;
    console.log('items: ', response.data);
    console.log('offset on server: ', JSON.parse(req.query.data).offset);
    offset = JSON.parse(req.query.data).offset ? parseInt(JSON.parse(req.query.data).offset, 10) : 0;
    var nextOffset = offset + per_page;
    var previousOffset = offset - per_page < 1 ? 0 : offset - per_page;

    var meta = {
      limit: per_page,
      next: util.format('?limit=%s&offset=%s', per_page, nextOffset),
      offset: req.query.offset,
      previous: util.format('?limit=%s&offset=%s', per_page, previousOffset),
      total_count: items.length,
    };

    var json = {
      meta: meta,
      comments: getPaginatedItems(items, offset),
    };
    //console.log('my result', res.json(json));
    res.json(json);
  })
  .catch(function (error) {
    console.log(error);
  });
});


app.listen(port, () => console.log(`App listening on port ${port}`));