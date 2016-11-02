const request = require('request')

exports.get = () => {
  return new Promise(function (resolve, reject) {
    request.get({
      url: 'https://data.sfgov.org/resource/6a9r-agq8.json'
    }, (err, response, body) => {
      return err ? reject(err) : resolve(JSON.parse(body))
    })
  })
}
