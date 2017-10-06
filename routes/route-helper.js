function dataHandler(res, err, errMessage, data) {
  if (err) {
      res.status(500).send(errMessage);
    } else {
      res.json(data);
    }
}

module.exports = {
  dataHandler: dataHandler
}
