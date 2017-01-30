'use strict'
var express = require('express')
var app =  express()

app.get('/', function(req, res){
  res.send('Berhasil')
})

app.listen(3000, function() {
  console.log('Server is Running');
})
