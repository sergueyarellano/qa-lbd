const { test } = require('tap')
const { getFirst } = require('./support/utils')

test('getFirst() should return the first element in a list if a list passed', assert => {
  const list = [{ foo: 'bar' }, { foo: 'duuude' }]
  const actual = getFirst(list)
  const expected = {
    foo: 'bar'
  }
  assert.strictSame(actual, expected)
  assert.end()
})

test('getFirst() should return an object if and object is passed ', assert => {
  const obj = { foo: 'duuude' }
  const actual = getFirst(obj)
  const expected = {
    foo: 'duuude'
  }
  assert.strictSame(actual, expected)
  assert.end()
})
