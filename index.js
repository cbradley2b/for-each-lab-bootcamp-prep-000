function iterativeLog(array){
  array.forEach(function(element, index){console.log(`${index}: ${element}`)})
}

function iterate(callback){
  arr = ['clay', 'mere'];
  arr.forEach(callback);
  return arr
}

function doToArray(array, callback){
  array.forEach(callback)
}
