//handles requests for /bands

const db = require('../models');

function getAllBands(req, res){
  db.Band.find({}, function(err, data){
    if (err){
      console.log("There was an error: ", err);
      res.status(500).send("Internal Server Error");
    }else{
      res.json(data);
    }
  })
};

module.exports = {
  getAllBands: getAllBands
};
