const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3001


mongoose.connect("mongodb+srv://mostafanezar:1234@mybackendnodejs.qhd2pij.mongodb.net/sasa-data?retryWrites=true&w=majority&appName=mybackendnodejs").then(() => {
  app.get('/', (req, res) => {
    res.sendFile('./views/home.html', { root: __dirname })
  })

}
)

app.listen(port, () => {
  console.log(`http://localhost:3001`)
})
