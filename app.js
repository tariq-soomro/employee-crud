//-> Attach other files
require('./models/db')

//-> Required components to run application
const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const app = express()

//-> Setup the templating engine and views, layouts
app.set('views', path.join(__dirname, '/views/'))
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: '_layout', layoutsDir: __dirname + '/views/layouts/' }))
app.set('view engine', 'hbs')

//-> Set body parser to access data coming from view body
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json())

//-> Start listenig to the app on defined port here: localhost:3000
app.listen(3000, () => {
  console.log('Express server started at port: 3000')
})

//-> Redirect url requests to specified Routes
app.use('/employee', require('./controllers/employeeController'))