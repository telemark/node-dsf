'use strict'

var createClient = require('./lib/createClient')

function dsfLookup (options, callback) {
  if (!options) {
    return callback(new Error('Missing required input: options object'))
  }
  if (!options.config) {
    return callback(new Error('Missing required input: options.config'))
  }
  if (!options.config.url) {
    return callback(new Error('Missing required input: options.config.url'))
  }
  if (!options.config.namespaceBrukersesjon) {
    return callback(new Error('Missing required input: options.config.namespaceBrukersesjon'))
  }
  if (!options.config.distribusjonskanal) {
    return callback(new Error('Missing required input: options.config.distribusjonskanal'))
  }
  if (!options.config.systemnavn) {
    return callback(new Error('Missing required input: options.config.systemnavn'))
  }
  if (!options.config.brukernavn) {
    return callback(new Error('Missing required input: options.config.brukernavn'))
  }
  if (!options.config.passord) {
    return callback(new Error('Missing required input: options.config.passord'))
  }
  if (!options.method) {
    return callback(new Error('Missing required input: options.method'))
  }
  if (!options.query) {
    return callback(new Error('Missing required input: options.query'))
  }
  if (!options.query.saksref) {
    return callback(new Error('Missing required input: options.query.saksref'))
  }
  if (!options.query.foedselsnr) {
    return callback(new Error('Missing required input: options.query.foedselsnr'))
  }
  if (options.query.etternavn && !options.query.fornavn) {
    return callback(new Error('Missing required input: options.query.fornavn'))
  }
  if (options.query.fornavn && !options.query.etternavn) {
    return callback(new Error('Missing required input: options.query.etternavn'))
  }
  createClient(options.config, function (error, dsfClient) {
    if (error) {
      return callback(error, null)
    } else {
      dsfClient[options.method](options.query, function (err, data) {
        if (err) {
          return callback(err, null)
        } else {
          return callback(null, data)
        }
      })
    }
  })
}

module.exports = dsfLookup
