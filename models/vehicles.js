const mongoose = require('mongoose');
console.log('vehicels model run')

const ManufacturerInfoSchema = new mongoose.Schema({
  company: {
    type: String,
    unique: true,
    required: true
  },
  country: String,
});

const VehicleTypeSchema = new mongoose.Schema({
  model: {
    type: String,
    unique: true,
    required: true
  },
  year: {
    type: Number,
    unique: true,
    required: true
  },
  engineinfo: [{
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



const ManufacturerInfo = mongoose.model('ManufacturerInfo', ManufacturerInfoSchema);
const VehicleType = mongoose.model('VehicleType', VehicleTypeSchema);


module.exports = {
  ManufacturerInfo: ManufacturerInfo,
  VehicleType: VehicleType
};
