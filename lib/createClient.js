'use strict'

var soap = require('soap')

function createClient (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }
  if (!options.url) {
    return callback(new Error('Missing required input: options.url'))
  }
  if (!options.namespaceBrukersesjon) {
    return callback(new Error('Missing required input: options.namespaceBrukersesjon'))
  }
  if (!options.distribusjonskanal) {
    return callback(new Error('Missing required input: options.distribusjonskanal'))
  }
  if (!options.systemnavn) {
    return callback(new Error('Missing required input: options.systemnavn'))
  }
  if (!options.brukernavn) {
    return callback(new Error('Missing required input: options.brukernavn'))
  }
  if (!options.passord) {
    return callback(new Error('Missing required input: options.passord'))
  }

  soap.createClient(options.url, function (error, client) {
    if (error) {
      return callback(error, null)
    } else {
      var brukersesjon = {
        'brukersesjon:Brukersesjon': {
          distribusjonskanal: options.distribusjonskanal,
          systemnavn: options.systemnavn,
          brukernavn: options.brukernavn,
          passord: options.passord
        }
      }
      client.addSoapHeader(brukersesjon, '', '', options.namespaceBrukersesjon)
      return callback(null, client)
    }
  })
}

module.exports = createClient
