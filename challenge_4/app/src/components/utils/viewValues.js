function viewOnlyMatrixValues(arr){
  let newArr = arr.slice();
  let matrix = [];
  let snippet =[];
  // console.log('arr', arr);
  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 10; j++) {
      snippet.push(newArr[i][j].val)
    }
    matrix.push(snippet);
    snippet = [];
  }
  return matrix;
}

module.exports = viewOnlyMatrixValues;