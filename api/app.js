const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Maalem REST API')
})

app.get('/user/:id', (req, res) => {
  res.send("Profile " + req.params.id)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
