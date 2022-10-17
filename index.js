const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(5000, () => {
  console.log('Running on port 5000.')
})

// Export the Express API for Vercel
module.exports = app
