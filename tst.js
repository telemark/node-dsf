'use strict'

var dsfLookup = require('./index.js')

var config = {
  url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
// PROD  url: 'http://ws.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  distribusjonskanal: 'PTP',
  systemnavn: 'Systemnavn',
  brukernavn: 'T00UTKF', // Integrasjonsbruker DSF
  passord: 'TRAMP121'
}
var method = 'hentDetaljer'
var query = {
  saksref: 'your-reference',
  foedselsnr: '01010750160',
  etternavn: 'TOPSTAD',
  fornavn: 'TOMAS'
}
var options = {
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
