module.exports = {
  handleDbResponse: function(res, err, obj) {
    if(err) {
      res.status(500).send(err);
    } else {
      res.json(obj);
    }
  },
  mapParams: function (obj) {
    let newObj = {};
    for(key in obj) {
      if(obj[key]) {
        newObj[key] = obj[key];
      }
    }
    return newObj;
  },
};
