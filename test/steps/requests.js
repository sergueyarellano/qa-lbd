const { defineStep } = require('cucumber')
const request = require('request-promise')
const test = require('assert')
const { getFirst } = require('../support/utils')

defineStep('the {string}', async function (reqProp, body) {
  const formattedTable = body.rowsHash()

  // Creating body/headers namespace for later use
  this[reqProp] = formattedTable
})

defineStep('I make a {string} request to {string}', { timeout: 15 * 1000 }, async function (method, uri) {
  const headers = this.headers
  const body = this.body
  const options = {
    uri,
    method,
    headers,
    body,
    resolveWithFullResponse: true,
    json: true
  }

  this.response = await request(options)
})

defineStep('I receive a {int} http code with body', async function (expectedStatusCode, table) {
  const formattedTable = table.rowsHash()

  const actualStatusCode = this.response.statusCode
  test.deepStrictEqual(actualStatusCode, expectedStatusCode)

  const actualBodyKeys = Object.keys(getFirst(this.response.body)).sort()
  const expectedBodyKeys = Object.keys(formattedTable).sort()

  test.deepStrictEqual(actualBodyKeys, expectedBodyKeys)
})
