const express = require('express')

// Create the server
const app = express()

// Boiler plate for route calls
app.get('/api/test', (req, res) => {
  const test_str = "This is a test string";
  res.json({test_str});
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Express Server listening on port: ${PORT}`)
});
