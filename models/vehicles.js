const mongoose = require('mongoose');
console.log('vehicels model run');
Schema = mongoose.Schema

const ManufacturerInfoSchema = new mongoose.Schema({
  company: {
    type: String,
  },
  country: String,
  vehicles: [{
    type: Schema.Types.ObjectId,
    ref: 'Vehicles'
  }]
});

const VehicleTypeSchema = new mongoose.Schema({

  model: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  engineInfo: [{
    engineType: String,
    sizeLiters: String,
    fuelEconomy: String,
    powerBHP: String,
    torque: String,
  }],
  numberOfDoors: Number,
  colorOptions: Array,

});



const Manufacturer = mongoose.model('Manufacturer', ManufacturerInfoSchema);
const Vehicles = mongoose.model('Vehicles', VehicleTypeSchema);


module.exports = {
  Manufacturer: Manufacturer,
  Vehicles: Vehicles
};
