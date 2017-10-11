

const db = require('../models');
console.log('vehicles route running');

function getVehicleItems(req, res) {
  db.Vehicles.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error!');
    } else {
      res.json(data);
    }
  });
}

function createVehicleItem(req, res) {
  const newVehicleItem = new db.Vehicles({
    model: req.body.model,
    year: req.body.year,
    engineInfo: req.body.engineInfo,
    numberOfDoors: req.body.numberOfDoors,
    // manufacturerInfo: manufacturerInfo,

  });

  // newVehicleItem.isNew = true

  newVehicleItem.save(function(err, data) {
    if (err) {
      console.log('Error saving vehicle item to DB 31.', err);
      res.status(500).send('Internal server error!!');
    } else {
      res.status(201).json(data);
    }
  });
}

function getOneVehicle(req, res) {
  db.Vehicles.findById(req.params.id, function(err, data){
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error!');
    } else {
      res.json(data);
    }
  })
}

function deleteOneVehicle(req, res) {
  let id = req.params.id;
  db.Vehicles.findByIdAndRemove(id, function (err, deletedVehicle){
    res.json(deletedVehicle);
  });
}




module.exports = {
  getVehicleItems: getVehicleItems,
  createVehicleItem: createVehicleItem,
  getOneVehicle: getOneVehicle,
  deleteOneVehicle: deleteOneVehicle
};
