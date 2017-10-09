//handles requests for /labels

const db = require('../models');

function getAllLabels(req, res){
  db.Label.find({}, function(err, data){
    if(err){
      console.log("There was an error: ", err);
    }else{
      res.json(data)
    }
  })
}

 module.exports = {
   getAllLabels: getAllLabels
 };
