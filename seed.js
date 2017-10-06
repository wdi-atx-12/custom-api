const db = require('./models/');

const recurrences = [
  {}
]

db.Account.remove({}, () => {
  db.Recurrence.remove({}, () => {
    db.Transaction.remove({}, () => {
      let acct = new db.Account({
        name: 'savings',
        acctNo: '0987654321',
        routingNo: '1234567890'
      });
      recurrences.forEach(recData => {
        let recurrence = new db.Recurrence({recData});
        recurrence.default_transaction = recData.transactionData[0];
        recData.transactionData.forEach(transData => {
          let transaction = new db.Transaction(transData);
          transaction.save(() => {
            recurrence.transactions.push(transaction);
          });
        });
        recurrence.save(() => {
          acct.recurrences.push(recurrence);
        });
      });
      acct.save(() => {
        console.log('seeds created');
        process.exit();
      });
    });
  });
});
