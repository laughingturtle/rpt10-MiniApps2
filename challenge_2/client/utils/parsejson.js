export default function parsejson(json) {
  var data = json.data.bpi;
  var USDBitcoinPrice = [];

  for ( var key in data) {
    USDBitcoinPrice.push(data[key]);
  }

  return USDBitcoinPrice;
}