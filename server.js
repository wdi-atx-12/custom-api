// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
// app.get('/', function(req, res) {
//   res.json({
//     message: 'Hello, fish!',
//     type: 'greeting',
//     time: new Date()
//   });
// });

// Test Controller
const testRoutes = require('./routes/test');
app.get('/test', testRoutes.getTestItems);
app.post('/test', testRoutes.createTestItem);

//Artist Controlller
const artistRoutes = requie('./routes/artist');
app.get('/artist', artistRoutes.getArtistItems);
//any other artist functions added here.

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
