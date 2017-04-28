'use strict'

const test = require('ava')
const dsf = require('../../index')
let masterOptions = require('./../data/options.json')

test('It requires an options object to be supplied', async t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config'
  options.config = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.url to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.url'
  options.config.url = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.namespaceBrukersesjon to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.namespaceBrukersesjon'
  options.config.namespaceBrukersesjon = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.distribusjonskanal to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.distribusjonskanal'
  options.config.distribusjonskanal = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.systemnavn to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.systemnavn'
  options.config.systemnavn = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.brukernavn to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.brukernavn'
  options.config.brukernavn = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.passord to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.passord'
  options.config.passord = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.method to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.method'
  options.method = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query'
  options.query = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.saksref to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.saksref'
  options.query.saksref = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.foedselsnr to exist', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.foedselsnr'
  options.query.foedselsnr = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.etternavn to exist if options.query.fornavn is supplied', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.etternavn'
  options.query.etternavn = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.fornavn to exist if options.query.etternavn is supplied', async t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.fornavn'
  options.query.fornavn = false
  dsf(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})
