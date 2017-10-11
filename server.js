// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());


// or you can import route handlers from other files like this:
const eraRoutes = require('./routes/era');
app.get('/era', eraRoutes.getEra);
app.post('/era', eraRoutes.createEra);
app.put('/era/:id', eraRoutes.updateEra);
app.delete('/era', eraRoutes.deleteEra);



const composerRoutes = require('./routes/composers');
app.get('/composers', composerRoutes.getComposers);
app.post('/composers', composerRoutes.createComposers);
app.delete('/composers', composerRoutes.deleteComposers)
// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(process.env.PORT || 3000), function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
};
