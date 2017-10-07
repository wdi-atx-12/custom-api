const db = require('../models');

// get all projects
function getProjects(req, res) {

  db.Project.find({}, function(err, data) {
    if (err) {
      console.log(`Error, retrieving test items from DB, ${err}`);
      res.status(500).send(`Internal server error`);
    } else {
      res.json(data);
    }
  });
}

// get one single project
function getProject(req, res) {
  db.Project.findOne({ id: req.params._id }, function(err, data) {
    if (err) {
      console.log(`Error, ${err}`);
    } else {
      res.send(data);
    }
  })
}

// create a project
function createProject(req, res) {
  const newProject = db.Project({
    name: req.body.name,
    description: req.body.description,
    developers: req.body.deelopers
  });

  newProject.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// update a project
function updateProject(req, res) {

  console.log('req ', req.params)
  console.log('req.params._id ', req.params._id)
  db.Project.findByIdAndUpdate(req.params.id, {
    $set: req.body,
    new: true
  }).then((foundItem) => {
    if (!foundItem) {
      return res.status(500).send(`Error, ${err}`);
    }
    res.send(foundItem);
  }).catch((err) => {

    res.sendStatus(400).send();
  })
}

// delete a project
// function removeProject(req, res) {
//   db.Project.findByIdAndRemove({ id: _id }, function(err, data) {

//   })
// }

module.exports = {
  getProject: getProject,
  getProjects: getProjects,
  createProject: createProject,
  updateProject: updateProject
};
