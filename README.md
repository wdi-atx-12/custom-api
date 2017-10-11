TABLE OF CONTENTS
1. DESCRIPTION OF THE API
2. URL TO THE API
3. METHODS AND ENDPOINTS OF THE API
4. REQUIREMENTS AND BASIC STRUCTURE FOR THE API










---------------------------------------------------------------------------------------------------
1. Description of what your API does.
This API is a built datebase to track Pokemon trainers and their respective Pokemon.
Example: Ash Ketchum -- Pikachu.

2. The URL to the database is https://peaceful-sands-51099.herokuapp.com/

3. Maps out the API endpoints (method + path combos)
The API end points are '/trainer', '/pokemon', '/trainer:id/', '/pokemon:id'

In the '/trainer' endpoint is where all the trainer data is stored. Name of the trainer, location of where the trainer is from and what Pokemon the Trainer has.
In the '/trainer:id' endpoint is where you can find the specific trainer through their unique ID.
In the '/pokemon' endpoint is where all the information on the Pokemon is stored. Name of the Pokemon, type, number in the Pokedex, ability, height, weight, and all base stats.
In the '/pokemon:id' endpoint you can find all information on a specific Pokemon based off their unique ID.

The expected responses for these endpoints is when you use any CRUD operation the data is able to be manipulated in the database. You can add onto the existing data in the database, edit the data, make new data, or even delete all the data. The way you want to use the database is up to the user.

4. The basic properties of the schema model are as follows.
PokemonSchema
name: String,
pokedexNumber: String,
pokemonType: String,
specialAbility: String,
height: String,
weight: String

baseStats: {
hp: Number,
attack: Number,
defense: Number,
specialAttack: Number,
specialDefense: Number,
speed: Number

And for Trainers
name: {
  type: String,
  unique: true,
  required: true

location: {
  type: String,
  unique: true,
  required: true

pokemon: [{
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Pokemon'

I have left the following in the examples for you because those are the requirements to make this database. Inside the folder there will also be dependencies in the package.json folder. Do not forget to download those.
