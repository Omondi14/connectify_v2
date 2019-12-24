const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Create the server
const app = express()
const db = require('./queries')

app.use(bodyParser.json())
app.use(helmet());
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// Testing API Endpoint
app.get('/api/test', (req, res) => {
  const test_str = "This is a test string";
  res.json({test_str});
});

// Endpoints
app.get('/api/users', db.getUsers)
app.get('/api/users/:id', db.getUserById)
app.post('/api/users', db.createUser)
app.put('/api/users/:id', db.updateUser)
app.delete('/api/users/:id', db.deleteUser)

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
