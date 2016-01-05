exports.toArray = function (obj) {
  obj = obj || {}
  var result = []

  Object.keys(obj).forEach(function (key, i) {
    result.push(Object.assign({
      $key: key
    }, obj[key]));
    // result.push({ key: key, value: obj[key] })
  })

  return result
}

exports.toObject = function (arr) {
  arr = arr || []
  var result = {}

  arr.forEach(function (obj, i) {
    // if (typeof obj === 'object' && obj.key && obj.value) {
    if (typeof obj === 'object' && obj.$key) {
      const key = obj.$key;
      delete obj.$key;
      result[key] = obj;
      // result[obj.$key] = obj.value
    } else {
      result[String(arr.indexOf(obj))] = obj
    }
  })

  return result
}
