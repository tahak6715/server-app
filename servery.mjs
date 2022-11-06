
import express from 'express'
const app = express()
const port = process.env.PORT || 3000;

app.get('/tk123', (req, res) => {
  res.send('Hello World!Pakistan')
})
app.get('/tk', (req, res) => {
    res.send('Pakistan Hee Hamara')
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
