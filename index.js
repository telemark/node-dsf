'use strict'

const dsf = require('./lib/dsf')

module.exports = (options, callback) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await dsf(options)
      if (callback) {
        callback(null, data)
      } else {
        resolve(data)
      }
    } catch (err) {
      if (callback) {
        callback(err)
      } else {
        reject(err)
      }
    }
  })
}
