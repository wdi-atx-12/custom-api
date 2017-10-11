### Studio Guitarist API

This API seeks to provide a database of studio guitarists for hire.  It provides the guitarist's name and age, as well as a list of guitars that the guitarist can bring to a session or a show.  The schema for the guitars is detailed with info such as make, model, color, etc.

## Heroku Link

[Guitarist API](https://sheltered-dawn-56418.herokuapp.com/guitarists)

## API Endpoints

I have the basic endpoints to GET, GET by id, POST, PUT, and DELETE on my guitarist schema.  You can create a guitarist, get the collection of guitarists, or get specific info about each guitarist or guitar by their respective id.  If a guitarist needs to update their list of guitars, it's easy to do so with PUT.  Or if a guitarist wants to be removed from the database, he or she can delete their info.

## Model Structure

My guitarist model includes the name and age of the guitarist, as well as an embedded model for guitars.  In the guitar model you can get or change the name, make, model, year, origin, color, a boolean value for whether or not the guitar is a "neck-through", and the value of the guitar.  Using a simple POST command you can create guitarists and their guitars.