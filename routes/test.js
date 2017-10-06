// this is an example file showing how you might define route handlers

const db = require('../models');




// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getTestItems: getTestItems,
  createTestItem: createTestItem,
};
