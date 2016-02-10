[![Build Status](https://travis-ci.org/telemark/node-dsf.svg?branch=master)](https://travis-ci.org/telemark/node-dsf)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# node-dsf

Node.js module for looking up data from DSF (Det sentrale folkeregister).
DSF is register of residents in Norway.

To obtain login credentials and other permissions go to [infotorg.no](https://www.infotorg.no)

## Installation
From npm

```sh
$ npm install node-dsf
```

From GitHub

```sh
$ git clone git@github.com:telemark/node-dsf.git
```

Run the setup script

```sh
$ npm run setup
```

## Usage

```javascript
'use strict'

var dsfLookup = require('node-dsf')

var config = {
  url: 'http://ws-test.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
// PROD  url: 'http://ws.infotorg.no/xml/ErgoGroup/DetSentraleFolkeregister1_4/2015-08-10/DetSentraleFolkeregister1_4.wsdl',
  namespaceBrukersesjon: 'http://ws.infotorg.no/xml/Admin/Brukersesjon/2006-07-07/Brukersesjon.xsd',
  distribusjonskanal: 'PTP',
  systemnavn: 'systemnavn',
  brukernavn: 'brukernavn',
  passord: 'passord'
}
var method = 'hentDetaljer' // See supported methods
var query = {
  saksref: 'your-reference',
  foedselsnr: '26118633333',
  etternavn: 'Enge',
  fornavn: 'Jonas'
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
```

## Supported methods

You must get access to these methods from both skattedirektoratet and evry (see https://www.infotorg.no/)

(Don't be in a hurry)

* hentDetaljer
* hentForeldre
* hentRelatertePersoner
* hentBarn
* hentEktefelle
* hentKjernefamilie
