'use strict'

const dsfLookup = require('./index.js')

const config = {
  url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
// PROD  url: 'http://ws.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  distribusjonskanal: 'PTP',
  systemnavn: 'systemnavn',
  brukernavn: 'brukernavn',
  passord: 'passord'
}
const method = 'hentDetaljer' // See supported methods
const query = {
  saksref: 'your-reference',
  foedselsnr: '26118633333',
  etternavn: 'Enge',
  fornavn: 'Jonas'
}
const options = {
  method: method,
  config: config,
  query: query
}

dsfLookup(options, function (error, data) {
  if (error) {
    console.error(error)
  }
  console.log(JSON.stringify(data))
})
