const model = require('../models/foodTruck.js')

exports.get = (req, res) => {
  model.get()
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
}
