// const mongoose = require('mongoose');
const db = require ('./models');
console.log('i am working i think')

const carAry = [

  {
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
    colorOptions: ['black', 'red', 'grey', 'white'],
  },

  {
    model: 'GLI',
    year: 2007,
    engineinfo: [{
      engineType: 'gasoline',
      sizeLiters: '2.0 liters',
      fuelEconomy: '29city 32hwy',
      powerBHP: '200bhp',
      torque: '183ft-lbs',
    }],
    numberOfDoors: 2,
    colorOptions: ['black', 'red', 'grey', 'white'],
  }
]

db.Vehicles.remove({}, function(){
  db.Manufacturer.remove({}, function (){
    var newManufacturer = new db.Manufacturer ({
      company: 'Volkswagen',
      country: 'Germany'
    })
    // for each vehicle data
    for ( var i = 0; i < carAry.length; i++) {
       // create adatabase vehicle
       var newVehicle = new db.Vehicles (carAry[i])
        //save vehicle
      newVehicle.save(function(err, data) {
        if (err) {
          console.log('Error saving vehicle item to DB 31.', err);
          res.send('Internal server error!!');
        } else {
          newManufacturer.vehicles.push(newVehicle);
          if (carAry.length - 1 === i){

        }
      }

    });


     }
    }


    // push into manufacturer (parent)
    //when out of the loop
    //save manufacturer
  })
});













// const hatchback = new db.vehicles({
//   model: 'GTI',
//   year: 2008,
//   engineinfo: [{
//     engineType: 'gasoline',
//     sizeLiters: '2.0 liters',
//     fuelEconomy: '29city 32hwy',
//     powerBHP: '200bhp',
//     torque: '183ft-lbs',
//   }],
//   numberOfDoors: 2,
//   colorOptions: ['black', 'red', 'grey', 'white'],
//   manufacturerInfo: {
//     name: Volkswagen,
//   },
//   country: 'Germany',

// });

// GTI.savedfunction(err, savedItem) {
//   if(err){
//     console.log('Error saving vehicle.', err);
//   } else {
//     console.log('Vehicle successfully saved.');
//   }
// };
