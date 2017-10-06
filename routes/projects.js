const db = require('../models');

// get all projects
function getProjects(req, res) {
  db.Project.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

// get one single project

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

// delete a project


module.exports = {
  getProjects: getProjects,
  createProject: createProject
};
