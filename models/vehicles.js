const mongoose = require('mongoose');

const ManufacturerInfoSchema = new mongoose.Schema({
  company: {
    name: String,
    unique: true,
    required: true
  }
  country: String,
  vehicleType: Array,
});

const VehicleInfoSchema = new mongoose.Schema({
  model: {
    name: String,
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
const VehicleInfo = mongoose.model('VehicleInfo', VehicleInfoSchema);


module.exports = {
  ManufacturerInfo: ManufacturerInfo,
  VehicleInfo: VehicleInfo
};
