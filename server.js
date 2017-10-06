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
app.get('/', RootRoutes.getHome);

app.get('/accounts', AccountsRoutes.getAll);
app.get('/accounts/:id', AccountsRoutes.getOne);
app.post('/accounts', AccountsRoutes.postNew);
app.put('/accounts/:id', AccountsRoutes.update);

app.get('/accounts/:id/recurrences', RecurrencesRoutes.getAll);
app.get('/recurrences/:id', RecurrencesRoutes.getOne);
app.post('/accounts/:id/recurrences', RecurrencesRoutes.postNew);
app.put('/recurrences/:id', RecurrencesRoutes.update);

app.get('/accounts/:id/transactions', TransactionsRoutes.getAll);
app.get('/transactions/:id', TransactionsRoutes.getOne);
// app.post('/accounts/:id/transactions', TransactionsRoutes.postNew);
app.put('/transactions/:id', TransactionsRoutes.update);

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
