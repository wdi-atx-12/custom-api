// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req,res){
  res.send('hello world');
});

app.get('/recipe', function(req,res){
  db.Recipe.find({}, function(err, data){
    if(err){
    res.status(500).send('Error retrieving data.');
    }else{
    res.json(data);
    }
  });
});
// or you can import route handlers from other files like this:
// const testRoutes = require('./routes/test');
// app.get('/test', testRoutes.getTestItems);
// app.post('/test', testRoutes.createTestItem);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
