'use strict'

const createClient = require('./lib/createClient')

module.exports = (options, callback) => {
  return new Promise((resolve, reject) => {
    if (!options) {
      const error = new Error('Missing required input: options object')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config) {
      const error = new Error('Missing required input: options.config')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.url) {
      const error = new Error('Missing required input: options.config.url')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.namespaceBrukersesjon) {
      const error = new Error('Missing required input: options.config.namespaceBrukersesjon')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.distribusjonskanal) {
      const error = new Error('Missing required input: options.config.distribusjonskanal')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.systemnavn) {
      const error = new Error('Missing required input: options.config.systemnavn')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.brukernavn) {
      const error = new Error('Missing required input: options.config.brukernavn')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.config.passord) {
      const error = new Error('Missing required input: options.config.passord')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.method) {
      const error = new Error('Missing required input: options.method')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.query) {
      const error = new Error('Missing required input: options.query')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.query.saksref) {
      const error = new Error('Missing required input: options.query.saksref')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (!options.query.foedselsnr) {
      const error = new Error('Missing required input: options.query.foedselsnr')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (options.query.etternavn && !options.query.fornavn) {
      const error = new Error('Missing required input: options.query.fornavn')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    if (options.query.fornavn && !options.query.etternavn) {
      const error = new Error('Missing required input: options.query.etternavn')
      if (callback) {
        return callback(error)
      }
      reject(error)
    }
    createClient(options.config, (error, dsfClient) => {
      if (error) {
        if (callback) {
          return callback(error, null)
        }
        reject(error)
      } else {
        dsfClient[options.method](options.query, (err, data) => {
          if (err) {
            if (callback) {
              return callback(err, null)
            }
            reject(err)
          } else {
            if (data.MESSAGE) {
              if (callback) {
                return callback(data.MESSAGE, null)
              }
              reject(data.MESSAGE)
            } else {
              if (callback) {
                return callback(null, data)
              }
              resolve(data)
            }
          }
        })
      }
    })
  })
}
