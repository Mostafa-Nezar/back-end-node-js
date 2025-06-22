const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/hi', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
app.get('/hi2', (req, res) => {
  res.sendFile('./views/home.html',{root:__dirname})
})
app.listen(port, () => {
  console.log(`http://localhost:3001`)
})
