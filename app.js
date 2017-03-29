let express = require('express')
let bodyParser = require('body-parser')
let cookieSession = require('cookie-session')
require('dotenv').config()

let uiRoutes = require('./routes/ui.js')
let app = express()

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', uiRoutes)
app.use('/stylesheets', express.static('./public/stylesheets'))

console.log('Starting...')
let server = app.listen(3000, () => {
  console.log(`Server listening on port ${server.address().port}`)
})

