const express = require('express')

const app = express()

app.listen(process.env.PORT || 5000, () => {
  console.log('Running.')
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Export the Express API for Vercel
module.exports = app
