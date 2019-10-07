const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')

const routes = require('./routes')

const app = express()

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3000)
