'use strict'

var tap = require('tap')
var dsf = require('../index')
var masterOptions = require('./data/options.json')

tap.test('It requires an options object to be supplied', function (test) {
  var options = false
  var expectedErrorMessage = 'Missing required input: options object'
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config'
  options.config = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.url to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.url'
  options.config.url = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.namespaceBrukersesjon to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.namespaceBrukersesjon'
  options.config.namespaceBrukersesjon = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.distribusjonskanal to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.distribusjonskanal'
  options.config.distribusjonskanal = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.systemnavn to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.systemnavn'
  options.config.systemnavn = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.brukernavn to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.brukernavn'
  options.config.brukernavn = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.config.passord to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.config.passord'
  options.config.passord = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.method to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.method'
  options.method = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.query to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.query'
  options.query = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.query.saksref to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.query.saksref'
  options.query.saksref = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('requires param options.query.foedselsnr to exist', function (test) {
  var options = JSON.parse(JSON.stringify(masterOptions))
  var expectedErrorMessage = 'Missing required input: options.query.foedselsnr'
  options.query.foedselsnr = false
  dsf(options, function (error, data) {
    test.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
