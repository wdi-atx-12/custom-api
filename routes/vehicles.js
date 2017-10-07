

const db = require('../models');
console.log('vehicles route running');

function getVehicleItems(req, res){
  db.VehicleType.find({}, function(err, data){
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error!');
    } else {
      res.json(data);
    }
  })
   res.send('obtaining data from ');
};

function createVehicleItems(req, res){
  const newVehicleItem = db.VehicleType({
  });


  newVehicleItem.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error!!');
    } else {
      res.status(201).json(data);
    }
  });

}










module.exports = {
  getVehicleItems: getVehicleItems,
  createVehicleItems: createVehicleItems,
};


