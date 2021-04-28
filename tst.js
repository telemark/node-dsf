const dsfLookup = require('./index.js')

const config = {
  url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  // PROD  url: 'http://ws.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  distribusjonskanal: 'PTP',
  systemnavn: 'Systemnavn',
  brukernavn: 'brukernavn', // Integrasjonsbruker DSF
  passord: 'passord'
}
const method = 'hentDetaljer'
const query = {
  saksref: 'your-reference',
  foedselsnr: '01010750160', // comment out the one not needed
  foedselsdato: "010107", // comment out the one not needed
  etternavn: 'TOPSTAD',
  fornavn: 'TOMAS'
}
const options = {
  method,
  config,
  query
}

dsfLookup(options)
  .then(data => console.log(JSON.stringify(data, null, 2)))
  .catch(error => console.error(error))
