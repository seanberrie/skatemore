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

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(PORT, (err) => {
  console.log(err || `Server running on port ${PORT}.`)
})
