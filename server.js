// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// or you can import route handlers from other files like this:
const orderRoutes = require('./routes/orders'),
      entreeRoutes = require('./routes/entrees')


app.get('/newOrder', orderRoutes.getOrders);
app.post('/newOrder', orderRoutes.createOrder);
app.get('/newOrder/:id', orderRoutes.findByIdOrders);
//app.put('/newOrderChange/:id', orderRoutes.changeOrder);


app.delete('/removeOrder/:id', function deleteOrder(req, res) {
  console.log('entree delete', req.params.id);
  db.Order.findOneAndRemove({ _id: req.params.id },
    function(err){
      if (err) {
          console.log(err)
      }
      else {
         return res.send("Removed");
      }
  });
});

//entree stuff
app.get('/newEntrees', entreeRoutes.getEntrees);
app.post('/newEntrees', entreeRoutes.createEntrees);
app.get('/newEntrees/:id', entreeRoutes.findByIdEntrees);
//get all, get specific, post new, put update specific, delete specific

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
