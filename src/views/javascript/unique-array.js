function uniqueArray(arr) {
  return [...new Set(arr)];
}

function uniqueArray(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}
