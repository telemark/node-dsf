const test = require('ava')
const dsf = require('../../index')
const masterOptions = require('./../data/options.json')

test('It requires an options object to be supplied', t => {
  const options = false
  const expectedErrorMessage = 'Missing required input: options object'
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config'
  options.config = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.url to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.url'
  options.config.url = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.namespaceBrukersesjon to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.namespaceBrukersesjon'
  options.config.namespaceBrukersesjon = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.distribusjonskanal to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.distribusjonskanal'
  options.config.distribusjonskanal = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.systemnavn to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.systemnavn'
  options.config.systemnavn = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.brukernavn to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.brukernavn'
  options.config.brukernavn = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.config.passord to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.config.passord'
  options.config.passord = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.method to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.method'
  options.method = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query'
  options.query = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.saksref to exist', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.saksref'
  options.query.saksref = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.foedselsnr to exist if options.query.foedselsdato is not supplied', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing one of the required inputs: options.query.foedselsnr || options.query.foedselsdato'
  delete options.query.foedselsdato
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.foedselsdato to exist if options.query.foedselsnr is not supplied', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing one of the required inputs: options.query.foedselsnr || options.query.foedselsdato'
  delete options.query.foedselsnr
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.etternavn to exist if options.query.fornavn is supplied', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.etternavn'
  options.query.etternavn = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})

test('requires param options.query.fornavn to exist if options.query.etternavn is supplied', t => {
  const options = JSON.parse(JSON.stringify(masterOptions))
  const expectedErrorMessage = 'Missing required input: options.query.fornavn'
  options.query.fornavn = false
  return dsf(options).catch(error => {
    t.deepEqual(error.message, expectedErrorMessage, expectedErrorMessage)
  })
})
