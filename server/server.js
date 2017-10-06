const express = require('express');
const app = express();
const hbs = require('hbs');
let bodyParser = require('body-parser');
const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));

const api = require('../controllers/routes.js');
app.use('/api', api);



// Redirect for API testing
app.get('/', (req, res) => {
  res.redirect('/api');
});







app.listen(port, () => {
  console.log(`Node.js server started up on http://localhost:${port}`);
});



