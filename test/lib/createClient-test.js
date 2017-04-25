'use strict'

const test = require('ava')
const createClient = require('../../lib/createClient')
const masterOptions = require('./../data/options.json').config

test('It requires an options object to be supplied', t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.url to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.url'
  options.url = false
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param namespaceBrukersesjon to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.namespaceBrukersesjon'
  options.namespaceBrukersesjon = false
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.distribusjonskanal to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.distribusjonskanal'
  options.distribusjonskanal = false
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.systemnavn to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.systemnavn'
  options.systemnavn = false
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.brukernavn to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.brukernavn'
  options.brukernavn = false
  createClient(options, function (error, data) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.passord to exist', t => {
  let options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.passord'
  options.passord = false
  createClient(options, (error, data) => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})
