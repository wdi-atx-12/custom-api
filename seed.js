const mongoose = require('mongoose')
const db = require('./models');

const pikachu = new db.Pokemon({
  pokemonData: {
    name: 'Pikachu',
    pokedexNumber: 025,
    pokemonType: 'Eletric',
    specialAbility: 'Static',
    height: '1′4″ (0.41m)',
    weight: '13.2 lbs (6.0 kg)'
  },
  baseStats: {
    hp: 35,
    attack: 55,
    defense: 40,
    specialAttack: 50,
    specialDefense: 50,
    speed: 90
  }
});

pikachu.save(function(err, savedItem) {
  if (err) {
    console.log('Error saving Pokemon.', err);
  } else {
    console.log('Pikachu has been saved.');
  }
});

const ash = new db.Trainer({
  name: 'Ash',
  location: 'Pallet Town',
  pokemon: [],
});

ash.save(function(err, savedItem) {
  if (err) {
    console.log('Error saving Trainer.', err);
  } else {
    console.log('Trainer has been saved.');
  }
});
