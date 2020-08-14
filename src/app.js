const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "POST", "GET", "PUT", "PATCH", "DELETE", "OPTIONS", "HEAD");
  res.header("Access-Control-Request-Method", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token");
  next();
})


app.use('/',require('./routes'))

module.exports = app
