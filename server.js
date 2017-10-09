// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const flatten = require('flat');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// CRUD POKEMON DATA
  app.get('/pokemon', function(req, res) {
    db.Pokemon.find({}, function(err, data) {
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
  var japaneseName = new db.Pokemon({
    pokemonData: {
      name: req.body.name,
      pokedexNumber: req.body.pokedexNumber,
      pokemonType: req.body.Type,
      specialAbility: req.body.specialAbility,
      height: req.body.height,
      weight: req.body.weight
    },
  });

  japaneseName.save(function (err, name) {
    res.send(`japaneseName added: ${name}`)
    console.log('typeOfPokemon added', name);
  });
});

app.put('/pokemon/:id', function(req, res) {
  var pokemonId = req.params.id;
  var updatePokemon = {
    pokemonData: {
      name: req.body.pokemonData.name,
      pokedexNumber: req.body.pokemonData.pokedexNumber,
      pokemonType: req.body.pokemonData.pokemonType,
      specialAbility: req.body.pokemonData.specialAbility,
      height: req.body.pokemonData.height,
      weight: req.body.pokemonData.weight
    },
    // baseStats: {}
  };

  db.Pokemon.findByIdAndUpdate({_id: pokemonId}, updatePokemon, (err, updatePokemon) => {
    res.json(updatePokemon);
    if (err) {
      console.log(err);
    } else {
      console.log('COME BACK TO ME');
    }
  });
});

app.delete('/pokemon/:id', function(req, res) {
  var pokemonId = req.params.id;
  db.Pokemon.findOneAndRemove({_id: pokemonId}, function(err, deletePokemon) {
    res.json(deletePokemon);
  });
  console.log('Pokemon Deleted', req.params);
});

// CRUD TRAINER DATA
app.get('/trainer', function(req, res) {
  db.Trainer.find({}, function(err, data) {
    if (err) {
      res.status(500).send('Error getting data.');
    } else {
      res.json(data);
    }
  });
});

app.get('/trainer/:id', function(req, res) {
  var trainerId = req.params.id;
  db.Trainer.findOne({_id: trainerId}, function(err, foundTrainer) {
    if (err) {
      res.status(500).send('Error retreiving data.');
    } else {
      res.json(foundTrainer);
    }
  })
});

app.post('/trainer', function (req, res) {
  var newName = new db.Trainer({
    trainerData: {
      name: req.body.name
    },
  });

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
