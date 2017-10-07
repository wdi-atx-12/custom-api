// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// req.query.nameoffield    req.params.nameoffield


/* APP ROUTES
**************/

// Test Controller
const testRoutes = require('./routes/test');
app.get('/test', testRoutes.getTestItems);
app.post('/test', testRoutes.createTestItem);

//Artist Controlller
const artistRoutes = require('./routes/artist');
app.get('/artist', artistRoutes.getArtistItems);
app.post('/artist', artistRoutes.createArtistItem);


//Artwork controllers
const artworkRoutes = require('./routes/artwork');
app.get('/artwork', artworkRoutes.getArtworkItems);
app.post('/artwork', artworkRoutes.createArtworkItem);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
