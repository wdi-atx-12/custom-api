# ReadMe

This API is designed to act as a show schedule for music in Austin. You can use it to look for upcoming shows and find out pertinent information (band schedule, cover charge, location, etc) about all the events listed.

The API can be accessed at https://sheltered-ravine-30117.herokuapp.com/.


## Models

There are three models associated with this API, and their names and properties are listed below:

- Band:
    1. name (returns a string)
    2. genre (returns a string)
    3. website (returns a string)

- Venue:
    1. name (returns a string)
    2. location (returns a string)
    3. website (returns a string)
    4. twentyOneAndUp (returns a boolean value)

- Show:
    1. bands (returns an array of band object IDs)
    2. date (returns a date)
    3. venue (returns a venue object ID)
    4. time (returns a number)
    5. coverCharge (returns a number)

## Routes

There is a path associated with each of the three models, at ```/bands```, ```/venues```, and ```/shows```. The homepage redirects to ```/shows```. Each path has a full set of CRUD operations available; for the Shows object, for example, you can get all shows at ```/shows```, one show using the show object ID at ```/shows/:id```, you can post a new show, update a show, or delete a show. This functionalilty is available for all three paths.
