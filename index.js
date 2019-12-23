const express = require('express')

// Create the server
const app = express()

// Boiler plate for route calls
app.get('/api/test', (req, res) => {
  const test_str = "This is a test string";
  res.json({test_str});
});

const path = require('path')
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

// Choose the port and start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express Server listening on port: ${PORT}`)
});
