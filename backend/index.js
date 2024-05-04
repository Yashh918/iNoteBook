const connectToMongo = require('./db')
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

// available routes
app.use('/auth', require('./routes/auth'))
app.use('/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Your app listening on port ${port}`)
})
