'use strict'

const createClient = require('./createClient')

module.exports = options => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options object')
    }
    if (!options.config) {
      throw Error('Missing required input: options.config')
    }
    if (!options.config.url) {
      throw Error('Missing required input: options.config.url')
    }
    if (!options.config.namespaceBrukersesjon) {
      throw Error('Missing required input: options.config.namespaceBrukersesjon')
    }
    if (!options.config.distribusjonskanal) {
      throw Error('Missing required input: options.config.distribusjonskanal')
    }
    if (!options.config.systemnavn) {
      throw Error('Missing required input: options.config.systemnavn')
    }
    if (!options.config.brukernavn) {
      throw Error('Missing required input: options.config.brukernavn')
    }
    if (!options.config.passord) {
      throw Error('Missing required input: options.config.passord')
    }
    if (!options.method) {
      throw Error('Missing required input: options.method')
    }
    if (!options.query) {
      throw Error('Missing required input: options.query')
    }
    if (!options.query.saksref) {
      throw Error('Missing required input: options.query.saksref')
    }
    if (!options.query.foedselsnr) {
      throw Error('Missing required input: options.query.foedselsnr')
    }
    if (options.query.etternavn && !options.query.fornavn) {
      throw Error('Missing required input: options.query.fornavn')
    }
    if (options.query.fornavn && !options.query.etternavn) {
      throw Error('Missing required input: options.query.etternavn')
    }

    createClient(options.config)
      .then(dsfClient => {
        dsfClient[options.method](options.query, (err, data) => {
          if (err) {
            reject(err)
          } else {
            if (data.MESSAGE) {
              reject(data.MESSAGE)
            } else {
              resolve(data)
            }
          }
        })
      }).catch(err => {
        reject(err)
      })
  })
}
