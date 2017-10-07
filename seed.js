const mongoose = require('mongoose');
const db = require ('./models');

const hatchback = new db.vehicleType({
  model: 'GTI',
  year: 2008,
  engineinfo: [{
    engineType: 'gasoline',
    sizeLiters: '2.0 liters',
    fuelEconomy: '29city 32hwy',
    powerBHP: '200bhp',
    torque: '183ft-lbs',
  }],
  numberOfDoors: 2,
  colorOptions: ['black', 'red', 'grey', 'white']
  manufacturerInfo: {
    name: Volkswagen,
  },
  country: 'Germany',

});

GTI.savedfunction(err, savedItem) {
  if(err){
    console.log('Error saving vehicle.')
  } else {
    console.log('Vehicle successfully saved.')
  }
};
