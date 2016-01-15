'use strict'

var tap = require('tap')
var createClient = require('../lib/createClient')
var masterOptions = require('./data/options.json').config

tap.test('It requires an options object to be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.url to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.url'
  options.url = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param namespaceBrukersesjon to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.namespaceBrukersesjon'
  options.namespaceBrukersesjon = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.distribusjonskanal to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.distribusjonskanal'
  options.distribusjonskanal = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.systemnavn to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.systemnavn'
  options.systemnavn = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.brukernavn to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.brukernavn'
  options.brukernavn = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.passord to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.passord'
  options.passord = false
  createClient(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
