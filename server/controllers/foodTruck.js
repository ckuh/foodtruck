const model = require('../models/foodTruck.js')
const _ = require('underscore')

exports.get = (req, res) => {
  model.get()
    .then(data => {
      data = _.map(data, item => (
        _.pick(item, 'address', 'applicant', 'dayshours', 'facilitytype', 'fooditems', 'location')
      )).filter(item => {
        return !!item.address && !!item.applicant && !!item.dayshours && !!item.facilitytype && !!item.fooditems && !!item.location
      })
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(404).send(err)
    })
}
