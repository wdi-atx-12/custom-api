const db = require('./models/');

const recurrences = [
  {
    start_date: new Date('2001-01-11'),
    period: 'weekly',
    transactionData: [
      {
        name: 'beer',
        date: new Date('2001-01-11'),
        amount: -8.99,
        tags: ['food/drink'],
      },
      {
        name: 'beer',
        date: new Date('2001-01-18'),
        amount: -8.99,
        tags: ['food/drink'],
      },
      {
        name: 'beer',
        date: new Date('2001-01-25'),
        amount: -8.99,
        tags: ['food/drink'],
      }
    ],
  },
  {
    start_date: new Date('2001-01-12'),
    transactionData: [
      {
        name: 'bratwurst',
        date: new Date('2001-01-12'),
        amount: -9.49,
        tags: ['food/drink']
      }
    ]
  }
];

db.Account.remove({}, () => {
  db.Recurrence.remove({}, () => {
    db.Transaction.remove({}, () => {
      let acct = new db.Account({
        name: 'savings',
        acctNo: '0987654321',
        routingNo: '1234567890'
      });
      recurrences.forEach(recData => {
        let recurrence = new db.Recurrence(recData);
        recurrence.default_transaction = recData.transactionData[0];
        recData.transactionData.forEach(transData => {
          let transaction = new db.Transaction(transData);
          transaction.save((err, savedTrans) => {
            if(err) { console.log(err); }
            console.log('transaction created');
            recurrence.transactions.push(transaction);
            if(recData.transactionData.length === recurrence.transactions.length) {
              recurrence.save((err, savedRec) => {
                if(err) { console.log(err); }
                console.log('recurrence created');
                acct.recurrences.push(recurrence);
                if(recurrences.length === acct.recurrences.length) {
                  acct.save((err, savedAcct) => {
                    if(err) { console.log(err); }
                    console.log('seeds created');
                    process.exit();
                  });
                }
              });
            }
          });
        });
      });
    });
  });
});
