var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var app = express()

app.set('port', process.env.PORT || 3000)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

var server = app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + server.address().port)
})
