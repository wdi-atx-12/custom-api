// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

//band routes
const bandRoutes = require('./routes/band');
app.get('/band', bandRoutes.displayBandItems);
app.post('/band', bandRoutes.createBandItem);



// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});

// app routes
// you can add route handlers directly in this file like this:
// app.get('/', function(req, res) {
//   res.json({
//     message: 'Hello, world!',
//     type: 'greeting',
//     time: new Date()
//   });
// });
//
// app.get('/band', function(err, res){
//
//     if(err){
//       res.status(500).send('error retrieving data.');
//     } else{
//       res.json(getBands.displayBand);
//     }
//
// });
//
//
// // or you can import route handlers from other files like this:
// const getBands = require('./routes/band');
//
//
//
//
// // app.get('/band', getBands.displayBand);
//
// app.post('/band', getBands.createBand);


//TOdo: delete the above dummy routes and add your actual routes
