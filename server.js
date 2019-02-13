require('dotenv').config()

const express = require('express')
const app = express()
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MOGODB_URI = process.env.MOGODB_URI
const PORT = process.env.PORT || 3001
const usersRoutes = require('./routes/users.js')
const path = require('path')
const axios = require('axios')
const spotsRoutes = require('./routes/spots.js')

mongoose.connect(MOGODB_URI, { useNewUrlParser: true }, (err) => {
  console.log(err || 'Connected to MOngoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client', 'build')))

app.get('/api', (req, res) => {
  res.json({ message: 'API root' })
})

app.use('/api/users', usersRoutes)
app.use('/api/spots', spotsRoutes)

app.get('/skateparks', (req, res) => {
  axios(`https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}&limit=100&ll=${req.query.lat},${req.query.lng}&query=skatepark&v=20190209`)
    .then(({ data }) => {
      res.json({ data })
    }).catch(err => {
      console.log(err)
    })
})

app.get('/skateshops', (req, res) => {
    axios(`https://api.foursquare.com/v2/venues/search?client_id=${process.env.REACT_APP_CLIENT_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}&limit=100&ll=${req.query.lat},${req.query.lng}&query=boardshop&v=20190209`)
      .then(({ data }) => {
        res.json({ data })
      }).catch(err => {
        console.log(err)
      })
  })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})
