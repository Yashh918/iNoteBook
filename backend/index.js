const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Yashh!')
})

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})
