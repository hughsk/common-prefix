var test = require('tape')
var common = require('./')

test('common-prefix', function (t) {
  t.equal(common([]), '')
  t.equal(common(['a', 'b', 'c']), '')
  t.equal(common(['aa', 'ab', 'ac']), 'a')
  t.equal(common(['aaaa', 'aab', 'aaaac']), 'aa')
  t.equal(common(['abaa', 'aab', 'aaaac']), 'a')
  t.equal(common([' abaa', ' aab', ' aaaac']), ' a')
  t.equal(common(['a', 'a', 'a']), 'a')
  t.equal(common(['abcd', 'abcd', 'abcd']), 'abcd')
  t.equal(common(['', '', '']), '')
  t.equal(common([
    'mango-orange',
    'mango-apple',
    'mango-purple',
    'mango-pear'
  ]), 'mango-')

  t.end()
})
