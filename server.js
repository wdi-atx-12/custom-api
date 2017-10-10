// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req, res) {
  res.json({
    message: 'Hello, world!',
    type: 'greeting',
    time: new Date()
  });
});
// or you can import route handlers from other files like this:
const guitaristRoutes = require('./routes/guitarists');
app.get('/guitarists', guitaristRoutes.getGuitarist);
app.get('/:id', guitaristRoutes.getGuitaristById);
app.post('/guitarists', guitaristRoutes.createGuitarist);
app.put('/guitarists/:id', guitaristRoutes.updateGuitarist);
app.delete('/guitarists/:id', guitaristRoutes.deleteGuitarist);

// start app

app.listen(process.env.PORT || 3000)
