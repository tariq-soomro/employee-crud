
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
  if(!err){ console.log('MongoDB Connection Succeeded.') }
  else { console.log('Error in DB Connection: ' + err) }
})

require('./employee.model')
