const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./routes')

app.set('port', process.env.PORT || 1337)

app.use(cors())
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../public')))

// routes
app.use('/api/foodTruck', routes.foodTruck)

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Connected to server listening to port ', app.get('port'))
})
