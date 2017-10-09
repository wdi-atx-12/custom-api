const mongoose = require('mongoose');
console.log('vehicels model run')

const ManufacturerInfoSchema = new mongoose.Schema({
  company: {
    type: String,
    // unique: true,
    // required: true
  },
  country: String,
});

const VehicleTypeSchema = new mongoose.Schema({
  model: {
    type: String,
    // unique: true,
    // required: true
  },
  year: {
    type: String,
    // unique: true,
    // required: true
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
  manufacturerInfo: ManufacturerInfoSchema,
});



const Manufacturer = mongoose.model('Manufacturer', ManufacturerInfoSchema);
const Vehicles = mongoose.model('Vehicles', VehicleTypeSchema);


module.exports = {
  Manufacturer: Manufacturer,
  Vehicles: Vehicles
};
