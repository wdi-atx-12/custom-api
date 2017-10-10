// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app routes
app.get('/', (req, res) => { res.redirect('/shows') });

const showRoutes = require('./routes/shows');
app.get('/shows', showRoutes.getAllShows);
app.get('/shows/:id', showRoutes.getShow);
app.post('/shows', showRoutes.addShow);
app.put('/shows/:id', showRoutes.updateShow);
app.delete('/shows/:id', showRoutes.deleteShow);

const venueRoutes = require('./routes/venues');
app.get('/venues', venueRoutes.getAllVenues);
app.get('/venues/:id', venueRoutes.getVenue);
app.post('/venues', venueRoutes.addVenue);
app.put('/venues/:id', venueRoutes.updateVenue);
app.delete('/venues/:id', venueRoutes.deleteVenue);

const bandRoutes = require('./routes/bands');
app.get('/bands', bandRoutes.getAllBands);
app.get('/bands/:id', bandRoutes.getBand);
app.post('/bands', bandRoutes.addBand);
app.put('/bands/:id', bandRoutes.updateBand);
app.delete('/bands/:id', bandRoutes.deleteBand);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
