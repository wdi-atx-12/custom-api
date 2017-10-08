const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
  pokemonData: {
    name: String,
    pokedexNumber: String,
    pokemonType: String,
    specialAbility: String,
    height: String,
    weight: String
  },
  baseStats: {
    hp: Number,
    attack: Number,
    defense: Number,
    specialAttack: Number,
    specialDefense: Number,
    speed: Number
  },
});


const PokemonData = mongoose.model('PokemonData', pokemonSchema);

module.exports = {
  PokemonData: PokemonData,
};
