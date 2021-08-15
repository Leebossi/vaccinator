const express = require('express')
const cors = require('cors')
const app = express()
const fileReader = require('./util/fileReader')

app.use(express.json())
app.use(cors())
app.use(express.static('build'))

const antiqua = fileReader.readFile('./resources/Antiqua.source')
const solarBuddhica = fileReader.readFile('./resources/SolarBuddhica.source')
const zerpfy = fileReader.readFile('./resources/Zerpfy.source')
const vaccinations = fileReader.readFile('./resources/vaccinations.source')

app.get('/', (req, res) => {
  res.send('Hello Wrold!')
})

app.get('/api/antiqua', (req, res) => {
  res.json(antiqua)
})

app.get('/api/solarbuddhica', (req, res) => {
  res.json(solarBuddhica)
})

app.get('/api/zerpfy', (req, res) => {
  res.json(zerpfy)
})

app.get('/api/vaccinations', (req, res) => {
  res.json(vaccinations)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})