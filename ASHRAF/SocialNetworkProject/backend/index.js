const express = require('express'); // Fast, unopinionated, minimalist web framework for node.

const app = express(); // Initiate Express Application
const router = express.Router();
const mongoose = require('mongoose'); // Node Tool for MongoDB
const config = require('./config/database'); // Mongoose Config
//const path = require('path'); // NodeJS Package for file paths
const authentication = require('./routes/authentication')(router);


// Database Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log('Could NOT connect to database: ', err);
  } else {
 
    console.log('Connected to database: ' + config.db);
  }
});

// // Provide static directory for frontend
// app.use(express.static(__dirname + '/frontend/src/'));
app.use('/authentication', authentication);

//  // Connect server to Angular  Index.html
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/frontend/src/index.html'));
// });

// Start Server: Listen on port 8080
app.listen(8080, () => {
  console.log('Listening on port 8080');
});