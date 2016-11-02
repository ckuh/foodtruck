const express = require('express')
const app = express()
const path = require('path')

app.set('port', process.env.PORT || 1337)

app.use(express.static(path.join(__dirname, '../public')))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})

app.listen(app.get('port'), () => {
  console.log('Connected to server listening to port ', app.get('port'))
})
