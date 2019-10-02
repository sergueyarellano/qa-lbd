const { defineStep } = require('cucumber')
const request = require('request-promise')
const test = require('assert')

defineStep('I make a {string} request to {string}', async function (method, uri) {
  const options = {
    uri,
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    resolveWithFullResponse: true,
    json: true
  }

  this.response = await request(options)
})

defineStep('I receive a {int} http code', async function (expectedStatusCode) {
  const actualStatusCode = this.response.statusCode
  test.deepStrictEqual(actualStatusCode, expectedStatusCode)
})
