// dependencies
const express = require('express'),
  bodyParser = require('body-parser'),
  RootRoutes = require('./routes/root'),
  AccountsRoutes = require('./routes/accounts'),
  RecurrencesRoutes = require('./routes/recurrences'),
  TransactionsRoutes = require('./routes/transactions');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
console.log(RootRoutes.getHome);
app.get('/', RootRoutes.getHome);
app.get('/accounts', AccountsRoutes.getAll);
app.get('/accounts', AccountsRoutes.postNew);
app.get('/accounts/:id', AccountsRoutes.getOne);

app.get('/recurrences', RecurrencesRoutes.getAll);
app.get('/recurrences', RecurrencesRoutes.postNew);
app.get('/recurrences/:id', RecurrencesRoutes.getOne);

app.get('/transactions', TransactionsRoutes.getAll);
app.get('/transactions', TransactionsRoutes.postNew);
app.get('/transactions/:id', TransactionsRoutes.getOne);

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
