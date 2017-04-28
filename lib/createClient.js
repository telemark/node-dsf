'use strict'

const soap = require('soap')

module.exports = options => {
  return new Promise((resolve, reject) => {
    if (!options) {
      throw Error('Missing required input: options object')
    }
    if (!options.url) {
      throw Error('Missing required input: options.url')
    }
    if (!options.namespaceBrukersesjon) {
      throw Error('Missing required input: options.namespaceBrukersesjon')
    }
    if (!options.distribusjonskanal) {
      throw Error('Missing required input: options.distribusjonskanal')
    }
    if (!options.systemnavn) {
      throw Error('Missing required input: options.systemnavn')
    }
    if (!options.brukernavn) {
      throw Error('Missing required input: options.brukernavn')
    }
    if (!options.passord) {
      throw Error('Missing required input: options.passord')
    }

    soap.createClient(options.url, (error, client) => {
      if (error) {
        reject(error)
      } else {
        const brukersesjon = {
          'brukersesjon:Brukersesjon': {
            distribusjonskanal: options.distribusjonskanal,
            systemnavn: options.systemnavn,
            brukernavn: options.brukernavn,
            passord: options.passord
          }
        }
        client.addSoapHeader(brukersesjon, '', '', options.namespaceBrukersesjon)
        resolve(client)
      }
    })
  })
}
