const express = require('express')
const mongoose = require("mongoose")
const app = express()
const port = 3001
const user = require("./models/schema")
app.use(express.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://mostafanezar:1234@mybackendnodejs.qhd2pij.mongodb.net/sasa-data?retryWrites=true&w=majority&appName=mybackendnodejs").then(() => {
app.get('/', (req, res) => {
  res.sendFile('./views/home.html', { root: __dirname })
})
app.get('/success', (req, res) => {
  res.sendFile('./views/success.html', { root: __dirname })
})
app.post('/submit', (req, res) => {
  const myuser = new user(req.body)
  myuser.save().then(() => {
  res.redirect("/success")    
  }
  )
})
}
)

app.listen(port, () => {
  console.log(`http://localhost:3001`)
})
