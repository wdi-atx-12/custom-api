// this is an example file showing how you might define route handlers

function getGreeting(req, res) {
  res.json({
    message: 'Howdy!',
    type: 'greeting',
    time: new Date()
  });
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getGreeting: getGreeting
};
