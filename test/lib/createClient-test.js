const test = require('ava')
const createClient = require('../../lib/createClient')
const masterOptions = require('./../data/options.json').config

test('It requires an options object to be supplied', async t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param options.url to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.url'
  options.url = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param namespaceBrukersesjon to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.namespaceBrukersesjon'
  options.namespaceBrukersesjon = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param options.distribusjonskanal to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.distribusjonskanal'
  options.distribusjonskanal = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param options.systemnavn to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.systemnavn'
  options.systemnavn = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param options.brukernavn to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.brukernavn'
  options.brukernavn = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})

test('requires param options.passord to exist', async t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.passord'
  options.passord = false
  try {
    await createClient(options)
  } catch (error) {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  }
})
