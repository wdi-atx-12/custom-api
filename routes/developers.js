const db = require('../models');

// get all projects
function getDevelopers(req, res) {

  db.Developer.find({}, function(err, data) {
    if (err) {
      console.log(`Error, retrieving test items from DB, ${err}`);
      res.status(500).send(`Internal server error`);
    } else {
      res.json(data);
    }
  });
}

// get one single project
function getDeveloper(req, res) {
  db.Developer.findOne({ id: req.params._id }, function(err, data) {
    if (err) {
      console.log(`Error, ${err}`);
    } else {
      res.send(data);
    }
  })
}

// create a project
function createDeveloper(req, res) {
  const newDeveloper = db.Developer({
    name: req.body.name,
    github: req.body.github,
    projects: req.body.projects
  });

  newDeveloper.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// update a project
function updateDeveloper(req, res) {

  console.log('req ', req.params)
  console.log('req.params._id ', req.params._id)
  db.Developer.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    new: true
  }).then((foundItem) => {
    if (!foundItem) {
      return res.status(500).send(`Error, ${err}`);
    }
    res.send(foundItem);
  }).catch((err) => {

    res.sendStatus(400).send(`Error removing object ${req.params.id}`);
  })
}

// delete a project
function removeDeveloper(req, res) {
  db.Developer.findByIdAndRemove(req.params.id).then(removeDeveloper => {
    if (!removeDeveloper) {
      res.sendStatus(400).send(`Error removing object ${req.params.id}`)
    }
    res.send({
      'Removed Developer': req.params.name,
      'Removed ID': req.params.id
    }).catch((err) => {
      res.sendStatus(400).send(`Error removing object, ${err}`);
    })
  })
}

module.exports = {
  getDeveloper: getDeveloper,
  getDevelopers: getDevelopers,
  createDeveloper: createDeveloper,
  updateDeveloper: updateDeveloper,
  removeDeveloper: removeDeveloper
};
