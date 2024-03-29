const dsf = require('./lib/dsf')

module.exports = (options, callback) => {
  // eslint-disable-next-line
  return new Promise(async (resolve, reject) => {
    try {
      const data = await dsf(options)
      callback ? callback(null, data) : resolve(data)
    } catch (err) {
      callback ? callback(err) : reject(err)
    }
  })
}
