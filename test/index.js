var fs = require('fs');
var assert = require('assert');

var rework = require('rework');
var dedupe = require('../');

function read(file) {
  return fs.readFileSync('test/fixtures/' + file + '.css', 'utf8');
}

function test(file, msg) {
  var out = rework(read(file)).use(dedupe()).toString().trim();
  var expected = read(file + '.out').trim();
  msg += ': \n expected:\n' + expected + '\n got:\n' + out;
  assert.equal(out, expected, msg);
}

test('dedupe', 'Deduplicate failed');

console.log('Tests pass!');

