#Band Custom API

Hello, I have designed an API that allows and enables bands to have a page where bands can have a database/page
of information. Bands can sign up for an account and have page where they can display albums in an easy and organized fashion.

##https://nameless-ocean-65089.herokuapp.com/band

Here bands can add information about themselves. Simply fill out questions to the the model below.

```
name: String,
origin: String,
genre: String,
established: Date
```


```
app.get('/band', bandRoutes.displayBandItems);
app.get('/band/:id', bandRoutes.displayBandItem);
app.post('/band', bandRoutes.createBandItem);

function displayBandItems(req, res) {
  db.Band.find({}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createBandItem(req, res) {
  const newBandItem = db.Band({
    name: req.body.name,
    origin: req.body.origin,
    genre: req.body.genre,
    established: req.body.established
  });

newBandItem.save(function(err, data){
  if (err){
    console.log('error saving band item to data bas', err);
    res.status(500).send('Internal server error');
  } else {
    res.status(201).json(data);
  }
  ```



##https://nameless-ocean-65089.herokuapp.com/album

In order for a band to add an album to their discography I have developed a model that would allow them to simply enter the required fields. Adding tags would help broaden their chances of reaching more people.

Below you will find the code in which this would allow bands to add albums to their page.
```
name: {
  type: String,
  unique: true,
  required: true
},
imageUrl: {
  type: String,
  default: ""
},
tags: [{
  type: String,
  default: ""
}],
```

```
const albumRoutes = require('./routes/albums');
app.get('/album', albumRoutes.displayAlbumItems);
app.get('/album/:id', albumRoutes.displayAlbumItem);
app.post('/album', albumRoutes.createAlbumItem);
```


```
function displayAlbumItems(req, res) {
  db.Album.find({}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function displayAlbumItem(req, res) {
  db.Album.findOne({_id: req.params.id}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function createAlbumItem(req, res) {
  const newAlbumItem = db.Album({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    tags: []

  });
};
```

#https://nameless-ocean-65089.herokuapp.com/band/59dd48e7f73ece00125b0db6

In order to get to pull or grab a single band I have created a route where each band who is has signed up will be given a personal id in which they "live" and can be called upon.

Below is the code I used in order to get a band by id.

```
app.get('/band/:id', bandRoutes.displayBandItem);

function displayBandItem(req, res) {
  db.Band.findOne({_id: req.params.id}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

```
