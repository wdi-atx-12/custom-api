# Budge API
Budge is an event-based financial transaction tracker consisting of a Mongo database and RESTful API. All data is in JSON.

You can access it on Heroku here: <https://budge-api.herokuapp.com/>

*The following models' structures are represented as mongoose Schemas but should be converted to JSON for posting to this API.*

## Account
Represents a bank account and contains an array of Recurrence documents.
### Model
```javascript
{
  name: { type: String, required: true },
  acctNo: { type: String, required: true },
  routingNo: { type: String, required: true },
  tags: [String],
  recurrences: [{
    type: Schema.Types.ObjectId,
    ref: 'Recurrence',
  }],
}
```
### API Endpoints
- '/accounts'
  - GET - Returns array of all accounts
  - POST - Creates new account with JSON body content
- '/accounts/:id'
  - GET - Returns an account
  - PUT - Updates an account
  - DELETE - Deletes an account

## Recurrence
Represents a financial transaction as a potentially recurring event. Contains an array of Transaction documents. "default_transaction" contains data to prototype a new generic Transaction for recurring transactions that have a fixed amount e.g. rent, subscriptions, etc.

### Model
``` javascript
{
  name: String,
  start_date: { type: Date, required: true },
  end_date: Date,
  period: { type: String, default: 'once' },
  transactions: [{
    type: Schema.Types.ObjectId,
    ref: 'Transaction'
  }],
  default_transaction: TransactionSchema
}
```

### API Endpoints
- '/accounts/:id/recurrences'
  - GET - Returns all recurrences within an account
  - POST - Creates a new recurrence within an account
- '/recurrences/:id'
 - GET - Returns a recurrence
 - PUT - Updates a recurrence
 - DELETE - Deletes a recurrence

## Transaction
Represents a credit or debit to a given bank account.
``` javascript
{
  name: { type: String, required: true },
  date: Date,
  amount: { type: Number, required: true },
  tags: [String],
}
```

### API Endpoints
- '/accounts/:id/transactions'
  - GET - Returns all transactions within an account
  - POST - Creates a new transaction within an account - **not supported!**
- '/recurrences/:id'
 - GET - Returns a transaction
 - PUT - Updates a transaction
 - DELETE - Deletes a transaction
