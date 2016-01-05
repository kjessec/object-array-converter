var test = require('tape');
var convert = require('./index');

var obj = {
  a: {
    test: 1
  },
  b: {
    test: 2
  },
  c: {
    test: 3
  }
};

var arr = [
  { $key: 'a', test: 1 },
  { $key: 'b', test: 2 },
  { $key: 'c', test: 3 }
];

test('convert object keys/values to array of objects', function (t) {
  t.plan(1);
  t.deepEqual(convert.toArray(obj), arr);
});

test('convert array of objects to object keys/values', function (t) {
  t.plan(1);
  t.deepEqual(convert.toObject(arr), obj);
});
