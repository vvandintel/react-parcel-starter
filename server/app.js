const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const path = require('path')
const app = express()

const directory = path.resolve('build')

app.use(compression())
app.use(helmet())
app.use(express.static(directory))

app.get('*', (req, res) => {
  res.sendFile(path.join(directory, '/index.html'))
})

module.exports = app
