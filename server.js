// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

  app.get('/pokemon', function(req, res) {
    db.Pokemon.find({}, function(err, data) {
      if (err) {
        res.status(500).send('Error getting data.');
      } else {
        res.json(data);
      }
    });
  });

  app.get('/trainer', function(req, res) {
    db.Trainer.find({}, function(err, data) {
      if (err) {
        res.status(500).send('Error getting data.');
      } else {
        res.json(data);
      }
    });
  });

  app.get('/pokemon/:id', function(req, res) {
    var pokemonId = req.params.id;
    db.Pokemon.findOne({_id: pokemonId}, function(err, foundPokemon) {
      if (err) {
        res.status(500).send('Error retreiving data.');
      } else {
        res.json(foundPokemon);
      }
    })
  });

app.post('/pokemon', function (req, res) {
  var japaneseName = db.Pokemon({
    name: req.body.name,
  });

  japaneseName.save(function (err, name) {
    res.send(`japaneseName added: ${name}`)
  });

  console.log('typeOfPokemon added', req.body);

});

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
